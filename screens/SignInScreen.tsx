import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';



const auth = getAuth();
const image = { uri: "https://thumbs.dreamstime.com/z/cartoon-kids-laptop-monitor-surrounded-education-icons-home-schooling-distance-learning-concept-e-children-online-190304374.jpg" };

const SignInScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [value, setValue] = useState({
    email: '',
    password: '',
    error: '',
  });

  async function signIn() {
    if (!value.email || !value.password) {
      setValue({ ...value, error: 'Email and password must be provided.' })
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error: any) {
      setValue({ ...value, error: error.message })
    }
  }
  
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Welcome Back!</Text>
        <Text>Please sing in to your account</Text>
        {!!value.error && 
          <View style={styles.error}>
            <Text>{value.error}</Text>
          </View>
        }

        <View style={styles.controls}>
          <Input
            placeholder="Email"
            containerStyle={styles.control}
            value={value.email}
            onChangeText={(text) => setValue({ ...value, email: text })}
            leftIcon={<Icon name='envelope' size={16} />}
          />
          <Input
            placeholder="Password"
            containerStyle={styles.control}
            value={value.password}
            onChangeText={(text) => setValue({ ...value, password: text })}
            leftIcon={<Icon name='key' size={16} />}
            secureTextEntry={true}
          />
          <Button title="Sign in" buttonStyle={styles.control} onPress={signIn} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
    textHeader:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 35,
    color: '#ff006e',
    marginTop: 20,
  },
  controls: {
    flex: 1,
  },
  control: {
    marginTop: 40,
    minWidth: 300,
    backgroundColor:'#ff006e',
    borderRadius: 10,
    borderColor:'white',
    borderWidth: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: '110%',
  },
  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  },
});

export default SignInScreen;
