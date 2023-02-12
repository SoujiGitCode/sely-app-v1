import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TowerTable from "./elements/TowerTable";
import AnimationAsset from "./elements/AnimationAsset";

const Home = (props) => {
    const beta = false

    return (
        <View style={styles.container}>
            {beta &&<Image source={require("../img/tower.png")} style={styles.img}/>}
            {!beta && <AnimationAsset name={"nigiri"} width={300} height={300}/>}

            <Text style={styles.title}>Tower #5 A</Text>
            <TowerTable />

            <TouchableOpacity
                style={styles.btn}
                onPress={() => props.navigation.navigate("Detail")}
            >
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
    },
    img: {
        height: "50%",
        width: "100%",
        resizeMode: "contain",
    },
    title: {
        color: "rgb(38, 38, 36)",
        //fontFamily: "Montserrat_700Bold",
        fontSize: 30,
        marginTop: 20,
    },
    detail: {
        color: "rgb(38, 38, 36)",
        //fontFamily: "Montserrat_400Regular",
        fontSize: 18,
        textAlign: "center",
        paddingHorizontal: 20,
        lineHeight: 30,
        marginTop: 30,
    },
    btn: {
        marginTop: 30,
        marginBottom: 20,
        backgroundColor: "#3268a1",
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 30,
    },
    text: {
        //fontFamily: "Montserrat_600SemiBold",
        fontSize: 20,
        color: "#FFF",
    },
    tableContainer: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingBottom: 5,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    rowText: {
        fontSize: 16,
    },
});
