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
    
    
    margin: "32px auto 37px",
    maxWidth: "530px",
   
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"

      
  },
  errorContainer: {
    border: '1px solid red',
    margin: "32px auto 37px",
    maxWidth: "530px",
    
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)"

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