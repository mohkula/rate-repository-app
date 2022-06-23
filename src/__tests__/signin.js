import {render, fireEvent, waitFor} from '@testing-library/react-native'
import { Formik } from 'formik';
import {debug} from 'console'
 
import SignInForm from '../components/SigninForm'

describe('SignIn', () => {
    describe('SignInContainer', () => {
      it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
        const onSubmit = jest.fn();

        const {debug, getByPlaceholderText, getByText}  = render( <Formik><SignInForm onSubmit={() => onSubmit({

          Username: 'kalle',
          Password: 'password'
        }
        )} /></Formik>)
  


      
    

       await fireEvent.press(getByText('Sign in'));
    
       

        await waitFor(() => {
         
            expect(onSubmit).toHaveBeenCalledTimes(1);
            expect(onSubmit.mock.calls[0][0]).toEqual({
                Username: 'kalle',
                Password: 'password'
            })
           
        });


        await waitFor(() => {
            
            
           
        });
      });
    });
  });