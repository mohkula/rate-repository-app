import { useParams } from "react-router-native";
import { Pressable, View , StyleSheet  } from "react-native";
import * as Linking from 'expo-linking';







import Text from "./Text";

import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";



const styles = StyleSheet.create({
  
  container: {
    
      alignContent: 'space-around',
    backgroundColor: 'blue',
   
   height: 100,
    width: 170
    
   
    
  }
  
});



const SingleRepository = () => {
  const params = useParams();
  const { repository  } = useRepository({
    id: params.id
    });

   
  
const goToPage = () => {

  Linking.openURL(repository.url)
}

 

  return (
    
     <View>

      <Text >
{repository ?
 <RepositoryItem item={repository}/>

:
null
}

</Text> 
<View style={styles.container}>





<Pressable onPress={goToPage}>

<Text color= "textPrimary"  >

Open in GitHub 
</Text>
</Pressable>

</View>



 


      
     </View>
      
    
  );

}
export default SingleRepository;
