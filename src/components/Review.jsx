import { Formik } from "formik";
import { View } from "react-native";
import * as yup from "yup";
import ReviewForm from "./ReviewForm";
import { useNavigate } from "react-router-native";

import useCreateReview from "../hooks/useCreateReview.js";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: "",
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owners username is required."),
  repositoryName: yup.string().required("Name of the repository is required."),
  rating: yup.number().min(0).max(100).required("Rating is required."),
  text: yup.string(),
});

const Review = () => {
  const navigate = useNavigate();
  const [createReview, result] = useCreateReview();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    
    try {
     await createReview({
        ownerName,
        repositoryName,
        rating,
        text,
      });
      if (createReview) {
        navigate(`/repository/${ownerName}.${repositoryName}/` );
      }
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
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default Review;