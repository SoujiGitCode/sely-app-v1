import LottieView from 'lottie-react-native';
import {View, Animated, StyleSheet} from "react-native";
import {useRef} from "react";
const AnimationAsset = ({name, height, width}) =>{
    const size= {
        height: height,
        width: width
    }
    const animations =  {
        nigiri: require('../../../assets/animations/nigiri.json'),
        paperplane: require('../../../assets/animations/splash.json'),
        tower: require('../../../assets/animations/tower.json'),
        404: require('../../../assets/animations/404.json')
    }

    const animation = animations[name] || animations['404'];

    const progress = useRef(new Animated.Value(0)).current;

    return(
        <View style={size}>
            <LottieView
                progress={progress}
                source={animation}
                autoPlay
                loop
            />
        </View>
    )
}
export default AnimationAsset

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
})
