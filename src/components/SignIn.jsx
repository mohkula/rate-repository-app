import { useNavigate } from "react-router-dom";


import SigninForm from './SigninForm';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import { Formik  } from 'formik';
import { View } from "react-native";




const initialValues = {
    Username: '',
    Password: '',
  };

  const validationSchema = yup.object().shape({
    Username: yup
      .string()
      .required('Username is required'),
    Password: yup
      .string()
      .required('Password is required'),
  });
 
  
  
  


const SignIn = () => {
 const [signIn] = useSignIn();
 const navigate = useNavigate();



  const onSubmit = async (values) => {
   const username = values.Username
   const password = values.Password
   
   

   

    try {
      await signIn({ username, password });
      navigate("/")
    } catch (e) {
      
     
      

      console.log(e);
    }

    

     

    
 };



        return (
         <View>
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {({ handleSubmit }) => <SigninForm  onSubmit={handleSubmit}  />}
              
              
            </Formik>

            </View>
          
          );
     
  
  
  
};

export default SignIn;