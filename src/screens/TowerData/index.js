import React, { useState } from 'react';
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from "@expo/vector-icons/Feather";
import TowerInfo from "../elements/TowerInfo";
import TowerCharts from "../components/TowerCharts";
import LegendBox from '../components/LegendBox';
import Header from '../components/Header';
import styles from './styles';

const TowerData = props => {
    return (
        <View style={styles.container}>
            <Header props={props} />
            <View style={styles.chartContainer}>
                <Text style={styles.title}>Tower #5 A Data</Text>
                <View>
                   < TowerCharts  />
                </View>
            </View>
            <View style={styles.legendContainer}>
                <LegendBox />
            </View>
        </View>
    );
};

export default TowerData;