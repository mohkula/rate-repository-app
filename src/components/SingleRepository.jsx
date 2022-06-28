import { useParams } from "react-router-native";
import { Pressable, View , StyleSheet, FlatList  } from "react-native";
import * as Linking from 'expo-linking';
import { format, parseISO } from "date-fns";







import Text from "./Text";

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";



const styles = StyleSheet.create({
  
  container: {
    
      alignContent: 'space-around',
    backgroundColor: 'blue',
   
   height: 100,
    width: 170
    
   
    
  },
  reviewContainer: {
    backgroundColor: 'white',
    flexDirection: "row",
    padding: 8,
    justifyContent: "space-between",
  },
  circle: {
    marginLeft: 5,
    width: 45,
    height: 45,
    borderRadius: 100 / 2,
    borderColor: 'blue',
    borderWidth: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  rightColumn: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
    marginRight: 15,
    flex: 1,
  },
  
});


const RepositoryInfo = ({ repository }) => {
 
  const goToPage = () => {

    Linking.openURL(repository.url)
  
  
  }

  return (
    <View style={{ marginBottom: 12 }}>
      <RepositoryItem item={repository} linkButton={true} />

      <View style={styles.container}>
    <Pressable onPress={goToPage}>

<Text color= "textPrimary"  >

Open in GitHub 
</Text>
</Pressable>
</View>

    </View>
  );
};



const ReviewItem = ({ review }) => {
  const { createdAt, rating, text, user } = review;
  const formatedDate = format(parseISO(createdAt), "MM.dd.yyyy");

  return (
    <View style={styles.reviewContainer}>
      <View style={styles.circle}>
        <Text color="primary" fontWeight="bold">
          {rating} 
        </Text>
      </View>
      <View style={styles.rightColumn}>
        <Text fontWeight="bold" color="primary">{user.username}</Text>
        <Text color="primary">{formatedDate}</Text>
        <View style={styles.reviewText}>
          <Text color = "primary">{text}</Text>
        </View>
      </View>
    </View>
  );
};




const SingleRepository = () => {
  const params = useParams();
  const { repository  } = useRepository({
    id: params.id
    });

    const repositoryNodes = repository
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

    if (!repository) {
      return <Text>Loading...</Text>;
    }
  
   
  



return (
  <FlatList
    data={repositoryNodes}
    renderItem={({ item }) => <ReviewItem review={item} />}
    keyExtractor={({ id }) => id}
    ListHeaderComponent={() =>   <RepositoryInfo repository={repository}  />}

 />
  


    

);


}
export default SingleRepository;
