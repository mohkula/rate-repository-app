
import useRepositories from '../hooks/useRepositories'

import {Picker} from '@react-native-picker/picker'
import { useState } from 'react'

import { FlatList , View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;






const RepositoryList = () => {

  const [selectedSort, setselectedSort] = useState("highestRatedRepositories");

 


const setSortingOption =(option) => {

switch(option){
  

case "latestRepositories":

return "CREATED_AT"

case "highestRatedRepositories" :

return "RATING_AVERAGE"

case "lowestRatedRepositories":

return "RATING_AVERAGE"

default: 
return ""
 
}


}
const setSortingDirection =(option) => {
switch(option){
case "highestRatedRepositories":
  return "DESC"
  case "lowestRatedRepositories":
  return "ASC"

  default: 
  return "DESC"
}
}


  let sort = {
    orderBy: setSortingOption(selectedSort),
    orderDirection: setSortingDirection(selectedSort)
    
  };
  const { repositories } = useRepositories(sort);
  
  const searchPicker = () => {
    return (
    <Picker
    selectedValue={selectedSort}
    onValueChange={(itemValue, itemIndex) =>
      setselectedSort(itemValue)
    }>
    <Picker.Item label="Latest repositories" value="latestRepositories" />
    <Picker.Item label="Highest rated repositories" value="highestRatedRepositories" />
    <Picker.Item label="Lowest rated repositories" value="lowestRatedRepositories" />
  </Picker>
    )
  }
  
  

  const repositoryNodes = repositories
  
    ? repositories.edges.map(edge => edge.node)
    : [];
    
    return (
      <View testID="repositoryItem" style={{ flex: 1 }}>

      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem = {({item}) =>(
      
          <RepositoryItem item={item}/>
          
  
        )}
        ListHeaderComponent={searchPicker()}
      />
      </View>
    );
};

export default RepositoryList;
