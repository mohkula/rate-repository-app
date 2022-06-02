import {  View, Image, StyleSheet  } from 'react-native';



import Text from './Text'

const styles = StyleSheet.create({
    flexContainer: {
       width: 400,
       height: 150,
       
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        
        
        
      },
      flexItemA: {
          
        flexDirection: 'column',
        

        
      },
    container: {
      
        alignContent: 'space-around',
      backgroundColor: 'blue',
     
     height: 40,
      width: 170
      
     
      
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
      paddingRight: 50,
      paddingLeft: 50,
      paddingTop: 50,
      paddingBottom: 50,
      margin: 10
      
    },
  });

  const kFormatter = (num) => {
      
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)}

const RepositoryItem = ({item}) => {
    return(
        <View style= {styles.flexItemA}>   
<View style = {styles.flexContainer}> 
<Image source={{ uri: item.ownerAvatarUrl}} style={styles.logo}></Image>
          <View style = {styles.flexItemA}>
          <Text color="textSecondary" fontWeight='bold'> {item.fullName}</Text>
          <Text color="textSecondary">{item.description}</Text>
          <View style = {styles.container}>
          <Text>  {item.language}</Text>
          </View>
          </View>
          </View>
          <View style = {styles.flexContainer}> 
          <View style = {styles.flexItemA}>
          <Text color="textSecondary" fontWeight='bold'>{kFormatter(item.stargazersCount)}</Text>
          <Text color="textSecondary">Stars</Text>
          </View>  
          <View style = {styles.flexItemA}>
          <Text color="textSecondary" fontWeight='bold'>{kFormatter(item.forksCount)}</Text>
          <Text color="textSecondary">Forks</Text>
              </View>
              <View style = {styles.flexItemA}>
                  <Text color="textSecondary" fontWeight='bold'>{kFormatter(item.reviewCount)}</Text>
                  <Text color="textSecondary">Reviews</Text>
              </View>
              <View style = {styles.flexItemA}>
              <Text color="textSecondary" fontWeight='bold'>{kFormatter(item.ratingAverage)}</Text>
              <Text color="textSecondary">Ratings</Text>
          </View>
          </View>
          </View>
    )
}

export default RepositoryItem
