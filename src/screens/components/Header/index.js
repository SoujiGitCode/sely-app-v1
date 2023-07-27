import React, { useState } from 'react';
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";
import styles from './styles';

const Header = props => {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Feather name="chevron-left" color="#000" size={25} />
            </TouchableOpacity>
            <Feather name="wifi" color="#000" size={25} />
        </View>
    );
};

export default Header;