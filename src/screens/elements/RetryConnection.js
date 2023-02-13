import React, { useState } from 'react';
import {TouchableOpacity} from "react-native-gesture-handler";
import {StyleSheet, Text, View} from "react-native";

const RetryConnectionButton = ({counter, setCounter}) => {

    const handleClick = () => {
        setCounter(prevCounter => prevCounter +1);
    };

    return (
            <TouchableOpacity style={styles.btn} onPress={() => handleClick()}>
                <Text style={styles.text}>Reconnect 👾</Text>
            </TouchableOpacity>
    );
};

export default RetryConnectionButton;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },
    btn: {
        marginTop: 30,
        marginBottom: 20,
        backgroundColor: "#010101",
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 30,
    },
    text: {
        //fontFamily: "Montserrat_600SemiBold",
        fontSize: 20,
        color: "#FFF",
    }
});
