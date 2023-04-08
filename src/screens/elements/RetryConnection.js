import React, { useState } from 'react';
import {TouchableOpacity} from "react-native-gesture-handler";
import {StyleSheet, Text, View} from "react-native";
import WithRefresh from '../HOC/WithRefresh';

const RetryConnectionButton = ({refresh, refreshCount}) => {

    const handleClick = () => {
        refresh();
    };

   // console.log(refreshCount)


    return (
            <TouchableOpacity style={styles.btn} onPress={() => handleClick()}>
                <Text style={styles.text}>Reconnect 👾 {refreshCount}</Text>
            </TouchableOpacity>
    );
};

export default WithRefresh(RetryConnectionButton);


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
