import React from "react";
import { StyleSheet, Text, View, ImageBackground, Pressable,} from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { getAuth, signOut } from 'firebase/auth';
import { StackScreenProps } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

const auth = getAuth();
const image = { uri: "https://thumbs.dreamstime.com/z/cartoon-kids-laptop-monitor-surrounded-education-icons-home-schooling-distance-learning-concept-e-children-online-190304374.jpg" };


const HomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

  const { user } = useAuthentication();

  return (
    
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.container}>
            <View style={styles.containerbutton}>
              <Text style={styles.text}>Welcome {user?.email}</Text>
                  <View> 
                    <Button 
                      title={<Icon name="book" size={25} color="white"> Courses</Icon> }
                      buttonStyle={styles.button}
                      onPress={() => navigation.navigate('CourseScreen')}
                      />
                    <Button 
                      title={<Icon name="book" size={25} color="white"> New Courses</Icon> }
                      type="outline"
                      buttonStyle={styles.button}
                      onPress={() => navigation.navigate('CourseScreen') }/>
                </View>
             </View>
              <View style={styles.navcontainer}>
                  <View style={styles.navbar}>
                      <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')}>
                          <Icon name="home" size={35} color="white"></Icon> 
                      </Pressable>
                      <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('ProfileScreen')}>
                          <Icon name="user" size={32} color="white"></Icon> 
                      </Pressable>
                      <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('SettingScreen') }>
                          <Icon name="gear" size={30} color="white"></Icon> 
                      </Pressable>
                      <Pressable style={styles.iconbehave} onPress={() => signOut(auth)}>
                          <Icon name="sign-out" size={30} color="white"></Icon> 
                      </Pressable>
                  </View>
                </View>
          </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerbutton: {
    flex: 1,
    paddingBottom: 230,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '95%',
    padding: 30,
    borderRadius: 10,
    borderColor:'white',
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor:'#ff006e',
  },
  text:{
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 32,
    color: '#ff006e',
    flex:1,
    padding:15,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: '110%',
  },
        navcontainer:{
        position: 'absolute',
        alignItems: 'center',
        bottom: 35,
      },
      navbar:{
          flexDirection: 'row',
          backgroundColor: '#ff006e',
          width: '90%',
          justifyContent: 'space-evenly',
          borderRadius: 40,
      },
      icon:{
          height: 26,
          width: 26,
          color: 'red',
      },
      iconbehave:{
          padding: 14,
      }
});

export default HomeScreen;
  
// <Button
// title="Sign Out"
// buttonStyle={styles.control}
// onPress={() => signOut(auth) }
// />
// <Button 
// title="TestScreen"
// type="outline"
// buttonStyle={styles.control}
// onPress={() => navigation.navigate('TestScreen') }/>