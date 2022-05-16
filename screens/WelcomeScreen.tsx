import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from 'react-native-elements';

const image = { uri: "https://thumbs.dreamstime.com/z/cartoon-kids-laptop-monitor-surrounded-education-icons-home-schooling-distance-learning-concept-e-children-online-190304374.jpg" };

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
          <Text style={styles.text}>E-LEARNING APP</Text>
          <View style={styles.buttons}>
            <Button 
              title="Sign in"
              buttonStyle={styles.button}
              onPress={() => navigation.navigate('Sign In') }/>
            <Button 
              title="Sign up"
              type="outline"
              buttonStyle={styles.button}
              onPress={() => navigation.navigate('Sign Up') }/>
          </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 35,
    color: '#ff006e',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    borderColor:'white',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor:'#ff006e',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: '110%',
  },
});

export default WelcomeScreen;
