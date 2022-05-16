import React from "react";
import { StyleSheet, Text, View, ImageBackground, Pressable} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const image = { uri: "https://thumbs.dreamstime.com/z/cartoon-kids-laptop-monitor-surrounded-education-icons-home-schooling-distance-learning-concept-e-children-online-190304374.jpg" };
const iconHeigth = 26;
const iconWidth = 26;


const TabScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
    return (
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        <View style={styles.container}>
            <Text style={styles.text}>E-LEARNING APP</Text>
            <Pressable onPress={() => navigation.navigate('Home')  }>
              <Icon name="home" style={styles.icon}></Icon>
          </Pressable>
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
    icon:{
      height: 40,
      width: 40,
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
    image: {
      flex: 1,
      justifyContent: "center",
      height: '110%',
    },
  });
  
  export default TabScreen;
