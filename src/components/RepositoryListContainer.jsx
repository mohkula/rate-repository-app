import { FlatList , View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

 
 const RepositoryListContainer = ({repositories}) => 
{
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
    return (

      <View testID="repositoryItem" style={{ flex: 1 }}>
      <FlatList testID="repositoryItem"
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item }) => <RepositoryItem item={item} />}

          />
      </View>
    );
}

export default RepositoryListContainer