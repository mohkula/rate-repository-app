import SigninForm from './SigninForm';
import * as yup from 'yup';


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
 
  
  
  const onSubmit = values => {
    console.log('clicked submit')

   
  };


const SignIn = () => {
  
    
        return (
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              {({ handleSubmit }) => <SigninForm  onSubmit={handleSubmit}  />}
            </Formik>
          );
     
  
  
  
};

export default SignIn;