import React, {Fragment} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Loader from "../screens/Loader";
import TowerData from "../screens/TowerData";
import Disconnected from "../screens/Disconnected";

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false,
};

const HomeStackNavigator = ({connection}) => {

    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            {connection ?
            <Fragment>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="TowerData" component={TowerData} />
            </Fragment> :
                <Stack.Screen name="Home" component={Disconnected} />
            }
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;