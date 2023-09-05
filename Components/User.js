import { View, Text, StyleSheet, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './Header';
import Footer from './Footer';
import Api from './Api';

const User = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC/items.json")
            .then((obj) => obj.json())
            .then((res) => setData(res))
    })
    return (
        <ScrollView>
            <Header style={styles.header} />
            <View>
                {data.map((item) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.content}>{item.name}</Text>
                            <Image source={{ uri: item.url }} style={styles.image} />
                            <Text style={styles.title}>{item.id}</Text>
                            <TouchableOpacity style={[styles.btn,{backgroundColor:"red"}]} >
        <Text style={{color:"white"}}>Delete</Text>
      </TouchableOpacity><TouchableOpacity style={[styles.btn,{backgroundColor:"green"}]}>
        <Text style={{color:"white"}}>Edit</Text>
      </TouchableOpacity>
                        </View>
                    );
                })}

                </View>
            <Footer />
        </ScrollView>

    );
}

export default User;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 2,
        width: "80%",
    },
    title: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    content: {
        fontSize: 25,
        textAlign: "center"
    },
    image: {
        width: "100%",
        height: 200,
        // margin: 10,
    },
    header: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'lightgray',
        padding: 10,
        zIndex: 10,
    },btn: {
        borderWidth: 1,
        width: "90%",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
      },
});