import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View} from "react-native";
import {SafeAreaView, useSafeAreaInsets, SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigator/Navigation";
import Loader from "./src/screens/Loader"
import useWsData from "./CustomHooks/useWsData";
import * as Font from 'expo-font';

const App = () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const [appIsLoaded, setAppIsLoaded] = useState(false);
  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          "blackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
          "bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "boldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
          "italic": require("./assets/fonts/Roboto-Italic.ttf"),
          "light": require("./assets/fonts/Roboto-Light.ttf"),
          "lightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),
          "medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "mediumItalic": require("./assets/fonts/Roboto-MediumItalic.ttf"),
          "thin": require("./assets/fonts/Roboto-Thin.ttf"),
          "thinItalic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
          "regular": require("./assets/fonts/roboto.ttf")
        });
      }
      catch (error) {
        console.log(error);
      }
      finally {
      //  await delay(5000);
        setTimeout(() => {  setAppIsLoaded(true); }, 5000);
      }
    };

    prepare().then(r => console.log('font loaded') );
  }, []);

  const [data, setData] = useState('no data');
  //useWsData('ws://192.168.4.1:81')


  return (
      <SafeAreaProvider >
        <SafeAreaView  style={styles.container}>
          <NavigationContainer >
            {!appIsLoaded ?
                <Loader />
                :
                <HomeStackNavigator />}
          </NavigationContainer>

        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: 'black',
    fontSize: 18,
    fontFamily: "bold"
  }
});


export default App;
