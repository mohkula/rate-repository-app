import { Pressable, View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import { useState, useEffect } from 'react';
import Constants from 'expo-constants';
import Text from './Text'

import { ApolloClient, useQuery } from '@apollo/client';
import {ME } from '../graphql/queries'

import useAuthStorage from '../hooks/useAuthStorage';


const onPressFunction = () =>{
    console.log("button pressed")
}



const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2, 
    backgroundColor: '#24292e',
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
    paddingRight: Constants.statusBarHeight
    
    
  },
  
 
});




const AppBar =  () => {
  const [token, setToken] = useState(null)
  const authStorage = useAuthStorage()

  useEffect(() => {

    const getToken = async () => {
      const token = await authStorage.getAccessToken()
     setToken(token)
    }
    getToken()

   
  }, [])


  const signOut = async () => {


    await authStorage.removeAccessToken()
    await ApolloClient.resetStore()
    setToken(null)
   
  
  }
 

  const {data} = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    headers: {
      Authorization: `bearer ${token}`
    },
  })
  let loggedUser =false
  if(data !== undefined)
  {
     loggedUser = data.me
  }
  


  return <View style={styles.container}  >
    <Pressable  onPress={onPressFunction}>

        <ScrollView horizontal = {true} style={styles.container} >
        <Text > Repositories</Text>

        {loggedUser ? <Pressable  onPress={signOut}>

         <Text > Sign out</Text> 
         </Pressable>
        :
          <Link to="/signin"><Text > Sign in</Text></Link>
        }

  

        </ScrollView>

  

</Pressable></View>;
};

export default AppBar;