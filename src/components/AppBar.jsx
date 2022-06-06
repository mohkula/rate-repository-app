import { Pressable, View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import Constants from 'expo-constants';
import Text from './Text'

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

const AppBar = () => {
 
  return <View style={styles.container}  >{<Pressable  onPress={onPressFunction}>

        <ScrollView horizontal = {true} style={styles.container} >
        <Text > Repositories</Text>
  <Link to="/signin"><Text > Sign in</Text></Link>
  

        </ScrollView>

  

</Pressable>}</View>;
};

export default AppBar;