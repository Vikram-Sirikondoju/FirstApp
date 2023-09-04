import { View, Text, TextInput, Touchable, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Register = ({setDisplay}) => {
    
  return (
    <View style={style.register}>

      <Image style={style.stretch} source={require('./assets/icon.png')} />
      <Text style={style.title}>Register Page</Text>
      <TextInput placeholder="Enter Email or User Name" style={style.input}/>
      <TextInput placeholder="Password"  style={style.input}/>
      <TextInput placeholder="Confirm-Password"  style={style.input}/>
      <TouchableOpacity style={style.btn}  onPress={()=>setDisplay("Login")}>
        <Text>Register</Text>
      </TouchableOpacity>
      <Text style={style.login} onPress={()=>setDisplay("Login")}>Already have an account? Login</Text>
    </View>
  )
}

export default Register;

const style={
    register:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        borderWidth:1,
        width:"80%",
        margin:4,
        borderRadius:10,
        textAlign:"center"
    },
    btn:{
        borderWidth:1,
        width:"80%",
        margin:20,
        padding:10,
        borderRadius:10,
        alignItems:"center",
        backgroundColor:"pink",
        color:"white",
    },
    title:{
        margin:20,
        fontSize:30,
        textDecorationLine:"underline"
    },
    login:{
        margin:10,
        fontSize:15,
        textDecorationLine:"underline"
    },
    stretch:{

    }

}