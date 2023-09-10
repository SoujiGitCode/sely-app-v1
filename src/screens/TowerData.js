import React, { useState } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";
import TowerInfo from "./elements/TowerInfo";
import TowerCharts from "./components/TowerCharts"

const TowerData = props => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Feather name="chevron-left" color="#000" size={25} />
                </TouchableOpacity>
                <Feather name="wifi" color="#000" size={25} />
            </View>
            <View style={styles.cont3}>
                <Text style={styles.title}>Tower #5 B Data</Text>
                <View>
                    < TowerCharts />
                </View>

            </View>
        </View>
    );
};

export default TowerData

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: 15,
    },
    title: {
        fontSize: 25,
        //  fontFamily: "Montserrat_700Bold",
        marginTop: 30,
    },
    subtitle: {
        fontSize: 20,
        color: "#474747",
        marginTop: 10,
        //  fontFamily: "Montserrat_400Regular",
    },
    text: {
        // fontFamily: "Montserrat_400Regular",
        fontSize: 18,
        paddingRight: 80,
        lineHeight: 25,
    },
    textWhite: {
        color: "#fff"
    },

    btn: {
        backgroundColor: "#E2443B",
        paddingHorizontal: 60,
        paddingVertical: 12,
        borderRadius: 30,
    },
    btnText: {
        // fontFamily: "Montserrat_600SemiBold",
        fontSize: 20,
        color: "#FFF",
    },
    cont1: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 40,
    },
    c3: {
        alignItems: "center",
        justifyContent: "center",
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#529CC0",
    },
    c2: {
        alignItems: "center",
        justifyContent: "center",
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#529C47",
        marginHorizontal: 10
    },
    c1: {
        alignItems: "center",
        justifyContent: "center",
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#E2443B",
    },
    selected: {
        borderColor: "#E2443B",
        height: 30,
        width: 30,
        borderRadius: 24,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    cont2: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginVertical: 25,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    img: {
        height: "35%",
        width: "50%",
    },
    cont3: {
        flex: 1,
        backgroundColor: "#FFF",
        width: "100%",
        borderRadius: 50,
        paddingHorizontal: 20,
    },
});