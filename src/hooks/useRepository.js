import { useQuery } from "@apollo/client";
import { REPOSITORY } from "../graphql/queries";

const useRepository = (variables) => {
  const {data , ...rest } = useQuery( REPOSITORY, {
    variables: {id: variables.id},
    fetchPolicy: 'cache-and-network',
   
  })

  
  


 

  return {
    repository: data?.repository,
    
    ...rest
  };
};

export default useRepository;