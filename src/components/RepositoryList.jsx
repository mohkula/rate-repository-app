
import useRepositories from '../hooks/useRepositories'

import {Picker} from '@react-native-picker/picker'
import { useState } from 'react'
import TextInput from './TextInput'
import { FlatList , View, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;






const RepositoryList = () => {

  const [selectedSort, setselectedSort] = useState("highestRatedRepositories");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedText] = useDebounce(searchQuery, 500);



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


  let queryObj = {
    orderBy: setSortingOption(selectedSort),
    orderDirection: setSortingDirection(selectedSort),
    searchKeyword: debouncedText
    
  };
  const { repositories } = useRepositories(queryObj);
  
  const headerComponent = () => {
    return (
<View>


<TextInput onChangeText={newText => setSearchQuery(newText)}
/>


    <Picker
    selectedValue={selectedSort}
    onValueChange={(itemValue, itemIndex) =>
      setselectedSort(itemValue)
    }>
    <Picker.Item label="Latest repositories" value="latestRepositories" />
    <Picker.Item label="Highest rated repositories" value="highestRatedRepositories" />
    <Picker.Item label="Lowest rated repositories" value="lowestRatedRepositories" />
  </Picker>
  </View>
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
        ListHeaderComponent={headerComponent()}
      />
      </View>
    );
};

export default RepositoryList;
