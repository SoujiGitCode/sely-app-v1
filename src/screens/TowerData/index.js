import React from 'react';
import { Text, View } from "react-native";
import TowerCharts from "../components/TowerCharts";
import LegendBox from '../components/LegendBox';
import Header from '../components/Header';
import styles from './styles';
import { legendData } from '../../utils'

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
                {
                    legendData.map((element) => {
                        return (
                            <LegendBox 
                                key={element.key}
                                color={element.color}
                                text={element.text}
                            />
                        )
                    })
                }
            </View>
        </View>
    );
};

export default TowerData;