import SignUpForm from "./SignUpForm";
import { Formik } from "formik";
import { View } from "react-native";
import { useNavigate } from "react-router-native";

import * as yup from "yup";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
  password: "",
  username: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required("Username is required"),
  password: yup.string().min(5).max(50).required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], 'Passwords must match')
    .required("Password Confirmation is required"),
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signUp({ username, password });
      await signIn({ username, password });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUp;