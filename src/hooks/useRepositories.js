
import { GET_REPOSITORIES } from '../graphql/queries';

import {  useQuery } from '@apollo/client';


const useRepositories = (variables) =>{
 



    const { data, ...rest } =  useQuery(GET_REPOSITORIES, {
          variables,
           fetchPolicy: 'cache-and-network',
       })

       
    
   
  

  return {repositories:data?.repositories, ...rest}
 
};

export default useRepositories;