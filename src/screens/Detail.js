import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import AnimationAsset from "./elements/AnimationAsset";


const Detail = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <Feather name="chevron-left" color="#000" size={25} />
                </TouchableOpacity>
                <Feather name="wifi" color="#000" size={25} />
            </View>
            <AnimationAsset name={"tower"} width={300} height={300}/>
            <View style={styles.cont3}>
                <Text style={styles.title}>Tower #5 A</Text>
                <Text style={styles.subtitle}>Model S1</Text>
                <View style={styles.cont2}>
                    <Text style={{ ...styles.title, flex: 2, marginTop: 0 }}>Sections</Text>
                    <View style={styles.selected}>
                        <View style={styles.c1} ><Text style={styles.textWhite}>1</Text></View>
                    </View>
                    <View style={styles.c2} ><Text style={styles.textWhite}>2</Text></View>
                    <View style={styles.c3} ><Text style={styles.textWhite}>3</Text></View>
                </View>
                <Text style={styles.text}>
                    Section 1 Cables Data:
                </Text>
                <View style={styles.cont1}>
                    <FontAwesome name="heart-o" color="#000" size={25} />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => props.navigation.navigate("TowerData")}
                    >
                        <Text style={styles.btnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Detail;

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
    textWhite:{
        color: "#fff"
    },

    btn: {
        marginTop: 30,
        marginBottom: 20,
        backgroundColor: "#3268a1",
        paddingHorizontal: 50,
        paddingVertical: 10,
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
        marginHorizontal:10
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