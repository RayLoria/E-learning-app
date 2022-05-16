import React from "react";
import { StyleSheet, Text, View, ImageBackground, Pressable,FlatList,ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';
import Video  from 'expo-av';


// const image = { uri: "https://thumbs.dreamstime.com/z/cartoon-kids-laptop-monitor-surrounded-education-icons-home-schooling-distance-learning-concept-e-children-online-190304374.jpg" };

// const iconHeigth = 26;
// const iconWidth = 26;

// const TextScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

//     return (
//       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//           <View style={styles.container}>
//               <View>
//                   <Text style={{fontSize:30, color: 'white'}}>Hola Mundo!!</Text>
//               </View>
//               <View style={styles.navcontainer}>
//                   <View style={styles.navbar}>
//                      <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('PlayerScreen')  }>
//                         <Icon name="home" size={35} color="white"></Icon> 
//                      </Pressable>
//                      <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')  }>
//                         <Icon name="user" size={32} color="white"></Icon> 
//                      </Pressable>
//                      <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')  }>
//                         <Icon name="bell" size={30} color="white"></Icon> 
//                      </Pressable>
//                      <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')  }>
//                         <Icon name="gear" size={30} color="white"></Icon> 
//                      </Pressable>
//                      <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')  }>
//                         <Icon name="sign-out" size={30} color="white"></Icon> 
//                      </Pressable>
//                      <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')  }>
//                         <Icon name="sign-in" size={30} color="white"></Icon> 
//                      </Pressable>
//                   </View>
//               </View>
//           </View>
//        </ImageBackground>
//     );
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     image: {
//       flex: 1,
//       justifyContent: "center",
//       height: '110%',
//     },
//       navcontainer:{
//         position: 'absolute',
//         alignItems: 'center',
//         bottom: 35,
//       },
//       navbar:{
//           flexDirection: 'row',
//           backgroundColor: '#ff006e',
//           width: '90%',
//           justifyContent: 'space-evenly',
//           borderRadius: 40,
//       },
//       icon:{
//           height: 26,
//           width: 26,
//           color: 'red',
//       },
//       iconbehave:{
//           padding: 14,
//       }
//   });
    
    
//   export default TextScreen;