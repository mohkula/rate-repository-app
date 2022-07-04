import { StyleSheet, View } from 'react-native';

import { Route, Routes, Navigate } from 'react-router-native';

import MyReviews from './MyReviews';
import Review from './Review';
import SignUp from './signup';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import SignIn from './SignIn';
import theme from '../theme';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
       <AppBar />
        
        

       <Routes>
       <Route path="/" element={<RepositoryList />} exact />
       <Route path="/signin" element={<SignIn />} exact />
       <Route path='/review' element={<Review />} exact />
       <Route path='/signup' element={<SignUp />} exact />
       <Route path="/repository/:id" element={<SingleRepository />} exact />
       <Route path='/myreviews' element={<MyReviews />} exact />

        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
        
      
    </View>
  );
};

export default Main;