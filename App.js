import React, {useState, useEffect, Fragment} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {SafeAreaView, useSafeAreaInsets, SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigator/Navigation";
import Loader from "./src/screens/Loader"
import useWsData from "./CustomHooks/useWsData";
import * as Font from 'expo-font';
import Disconnected from "./src/screens/Disconnected";
import TowerInfo from "./src/screens/elements/TowerInfo";

const App = () => {
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
        //console.log(error);
      }
      finally {
      //  await delay(5000);
        setTimeout(() => {  setAppIsLoaded(true); }, 3000);
      }
    };

    prepare().then(r => connectionStatus() );


  }, []);

  function connectionStatus (){
    //console.warn(wsdata)
    setConnection(true)
    if (wsdata == null || !wsdata.sections?.a) setConnection(false)

    }


  const [connection, setConnection] = useState(true)


  const [con, setCon] = useState(<HomeStackNavigator />)
  const wsdata = useWsData('dev');
  useEffect(() => {
    connectionStatus()
  }, [wsdata]);


  const [customRender, setCustomRender] = useState(connection ? <HomeStackNavigator connection={connection}/> :
      <Disconnected counter={counter} setCounter={setCounter}/>)

  const [counter, setCounter] = useState(0);


  useEffect(() => {
    connectionStatus()
  }, [counter]);

  useEffect(() => {
   // console.warn('con ilai: '+connection)
  }, [connection]);

  useEffect(() => {
    connectionStatus()
  }, [con]);

  return (
      <SafeAreaProvider >
        <SafeAreaView  style={styles.container}>
          <NavigationContainer >
            {!appIsLoaded ?
                <Loader />
                :
              customRender
                }
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
