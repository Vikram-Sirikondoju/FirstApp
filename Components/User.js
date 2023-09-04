import { View, Text } from 'react-native'
import React from 'react'

const User = ({setDisplay}) => {
  return (
    <View>
      <Text style={style.text}>Welcome to User Page</Text>
    </View>
  )
}

export default User;

const style={
    text:{
        fontSize:20,
        textAlign:"center"

    }
}