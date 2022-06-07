import FormikTextInput from './FormikTextInput';
import {  Pressable, View, StyleSheet } from 'react-native';
import Text from './Text';


const styles = StyleSheet.create({

  container: {
    backgroundColor: 'blue',
    height: 40,
      width: 170
  }
})

const SigninForm = ({ onSubmit }) => {
    return (
      <View>
        <FormikTextInput name="Username" placeholder="Username"  />
        
        <FormikTextInput secureTextEntry={true} name="Password" placeholder="Password" />
        <Pressable onPress={onSubmit}>
         <View style ={styles.container}>
         <Text  color={'primary'}>Sign in</Text>
         </View>
          
        </Pressable>
      </View>
    );
  };

  export default SigninForm