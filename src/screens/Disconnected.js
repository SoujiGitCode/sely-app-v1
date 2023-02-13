import AnimationAsset from "./elements/AnimationAsset";
import {Fragment} from "react";
import {View, Text, StyleSheet} from "react-native";
import RetryConnection from "./elements/RetryConnection";
import RetryConnectionButton from "./elements/RetryConnection";
const Disconnected = ({counter, setCounter}) => {
    return (
        <View style={styles.container}>
            <AnimationAsset name={"disconnected"} height={400} width={400}/>
            <View>
                <Text style={styles.dc}>Access Point Not Found, tower data unreachable 💀.</Text>
            </View>

        <RetryConnectionButton counter={counter} setCounter={counter} />
        </View>

    );
};

export default Disconnected;


const styles = StyleSheet.create({
    dc:{
        fontSize: 20
    },
    container: {
        flex: 1,
        alignItems:"center",
        padding: 20
    },
});