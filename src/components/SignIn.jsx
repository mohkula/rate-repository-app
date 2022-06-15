import SigninForm from './SigninForm';
import * as yup from 'yup';

import useSignIn from '../hooks/useSignIn';
import { Formik  } from 'formik';

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
 const [signIn, result] = useSignIn();
    


  const onSubmit = async (values) => {
    
   const username = values.Username
   const password = values.Password
   
   

   

    try {
      const { data } = await signIn({ username, password });
    } catch (e) {
      console.log(result.data.authenticate.accessToken)

      console.log(e);
    }


     

    
 };



        return (
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {({ handleSubmit }) => <SigninForm  onSubmit={handleSubmit}  />}
            </Formik>
          );
     
  
  
  
};

export default SignIn;