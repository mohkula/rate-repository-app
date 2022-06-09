import { useState } from 'react';

import { GET_REPOSITORIES } from '../graphql/queries';

import {  useQuery } from '@apollo/client';


const useRepositories = () =>{
  //const [repositories, setRepositories] = useState();
// const [loading, setLoading] = useState(false);


    

    const { data, ...rest } =  useQuery(GET_REPOSITORIES, {
           fetchPolicy: 'cache-and-network',
       })

       
    
   
  

  return {repositories:data?.repositories, ...rest}
 







       

   


};

export default useRepositories;