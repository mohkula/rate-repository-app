import { Pressable, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text'

const onPressFunction = () =>{
    console.log("button pressed")
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight * 2, 
    backgroundColor: '#24292e',
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
    paddingRight: Constants.statusBarHeight
    
    
  },
  
 
});

const AppBar = () => {
 
  return <View style={styles.container}  >{<Pressable  onPress={onPressFunction}>
  <Text > Repositories</Text>
</Pressable>}</View>;
};

export default AppBar;