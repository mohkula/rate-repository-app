
import useRepositories from '../hooks/useRepositories';

import { FlatList , View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;






const RepositoryList = () => {
  const { repositories, loading, refetch } = useRepositories();

  
  
  
  

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
      />
      </View>
    );
};

export default RepositoryList;
