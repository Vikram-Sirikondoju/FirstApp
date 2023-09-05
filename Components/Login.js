import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const Register = ({ setDisplay }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ field: "", message: "" });
  const onSubmit = () => {
    let loginError = { field: "", message: "" };
    if (email === "") {
      loginError.field = 'email';
      loginError.message = "Email is required";
      setError(loginError)
    }else if(password === "") {
      loginError.field = 'password';
      loginError.message = "Password is required";
      setError(loginError)
    }else{
      setError({ field: "", message: "" })
      setDisplay("User")
    }
  }

  return (
    <View style={style.register}>
      <Image style={style.stretch} source={require('./assets/icon.png')} />
      <Text style={style.title}>LogIn Page</Text>
      <TextInput placeholder="Enter Email or User Name" value={email} onChangeText={(text) => setEmail(text)} style={style.input} />
      {error.field === "email" && (
        <Text style={{ color: "red" }}>{error.message}</Text>
      )}
      <TextInput placeholder="Password" value={password} style={style.input} onChangeText={(text) => setPassword(text)} />
      {error.field === "password" && (
        <Text style={{ color: "red" }}>{error.message}</Text>
      )}
      <TouchableOpacity style={style.btn} onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <Text style={style.login} onPress={onSubmit}>New User / Register</Text>
    </View>
  )
}

export default Register;

const style = {
  register: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    borderWidth: 1,
    width: "80%",
    margin: 4,
    borderRadius: 10,
    textAlign: "center"
  },
  btn: {
    borderWidth: 1,
    width: "80%",
    margin: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "pink",
    color: "white",
  },
  title: {
    margin: 20,
    fontSize: 30,
    textDecorationLine: "underline"
  },
  login: {
    margin: 10,
    fontSize: 15,
    textDecorationLine: "underline"
  }

}