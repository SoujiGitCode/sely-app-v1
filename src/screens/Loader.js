import LottieView from 'lottie-react-native';
import {View, Animated, StyleSheet} from "react-native";
import {useRef} from "react";
const Loader = _ =>{
    const progress = useRef(new Animated.Value(0)).current;

    return(
        <View style={{height: 400, width: 400}} style={styles.container}>
            <LottieView
                progress={progress}
                source={require('../../assets/animations/splash.json')}
                autoPlay
                loop
            />
        </View>
    )
}
export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: 'black',
        fontSize: 18,
        fontFamily: "bold"
    },
})
