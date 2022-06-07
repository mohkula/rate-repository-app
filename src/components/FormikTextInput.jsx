import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    fontSize: 20,
    marginTop: 5,
    color: '#d73a4a'
  },
  container:  {
    
    
  
    maxWidth: 530,
   
    padding: 30,
   
    borderColor: 'black',
    borderWidth: 1

      
  },
  errorContainer: {
    
    maxWidth: 530,
   
    padding: 30,
    borderColor: 'red',
    borderWidth: 1

  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput style={showError ? styles.errorContainer : styles.container}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError &&  <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;