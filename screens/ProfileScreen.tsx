import React from "react";
import { StyleSheet, Text, View, ImageBackground, Pressable, } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();
const image = { uri: "https://thumbs.dreamstime.com/z/cartoon-kids-laptop-monitor-surrounded-education-icons-home-schooling-distance-learning-concept-e-children-online-190304374.jpg" };

const ProfileScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.container}>
              <View>
                  <Text style={{fontSize:32, color: '#ff006e', fontWeight:'bold',fontStyle: 'italic',}}>Your progress</Text>
              </View>
              <View style={styles.containerbutton}>
                  <View> 
                    <Button 
                      title={<Icon name="book" size={20} color="white"> Your Courses</Icon> }
                      buttonStyle={styles.button}
                      onPress={() => navigation.navigate('CourseScreen')}
                      />
                    <Button 
                      title={<Icon name="book" size={20} color="white"> Your weekly progress</Icon> }
                      type="outline"
                      buttonStyle={styles.button}
                      onPress={() => navigation.navigate('CourseScreen') }/>
                </View>
             </View>
              <View style={styles.navcontainer}>
                  <View style={styles.navbar}>
                     <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')  }>
                        <Icon name="home" size={32} color="white"></Icon> 
                     </Pressable>
                     <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')  }>
                        <Icon name="bell" size={30} color="white"></Icon> 
                     </Pressable>
                     <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')  }>
                        <Icon name="gear" size={30} color="white"></Icon> 
                     </Pressable>
                     <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')  }>
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
    image: {
      flex: 1,
      justifyContent: "center",
      height: '110%',
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
    
    
  export default ProfileScreen;