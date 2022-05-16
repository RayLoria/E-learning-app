import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, ImageBackground,Pressable, ScrollView } from 'react-native';
import { Video } from 'expo-av';
import React from 'react';
import { StackScreenProps } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, signOut } from 'firebase/auth';

const image = { uri: "https://thumbs.dreamstime.com/z/cartoon-kids-laptop-monitor-surrounded-education-icons-home-schooling-distance-learning-concept-e-children-online-190304374.jpg" };


const auth = getAuth();

const videos = [
  {id:1, uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"},
  {id:2, uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"},
  {id:3, uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"},
  {id:4, uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
  {id:5, uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"},
  {id:6, uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
  {id:7, uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
  {id:8, uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"},
  {id:9, uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"},
]

const PlayerScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {


  return (
  <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <ScrollView>
        {videos.map(video=>(
          <View key={video.id} style={{height: 400,margin:20}}>
            <Video
              style={styles.video}
              source={{uri:video.uri }}
              useNativeControls
              resizeMode="contain"/>
          </View>
        ))}
              <View style={styles.navcontainer}>
                  <View style={styles.navbar}>
                     <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')  }>
                        <Icon name="home" size={32} color="white"></Icon> 
                     </Pressable>
                     <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('ProfileScreen')}>
                        <Icon name="user" size={30} color="white"></Icon> 
                     </Pressable>
                     <Pressable style={styles.iconbehave} onPress={() => navigation.navigate('Home')  }>
                        <Icon name="bell" size={30} color="white"></Icon> 
                     </Pressable>
                     <Pressable style={styles.iconbehave} onPress={() => signOut(auth)}>
                        <Icon name="sign-out" size={30} color="white"></Icon> 
                     </Pressable>
                  </View>
              </View>
          </ScrollView>
        </View> 
    </ImageBackground>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 160,
    padding: 160,
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

export default PlayerScreen;