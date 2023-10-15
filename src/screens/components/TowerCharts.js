import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLine, VictoryArea } from 'victory-native';
import useWsData from "../../../CustomHooks/useWsData";


const BAR_WIDTH = 20;

const barColor = '#525FE1';
const areaColor = '#F86F03';

const BarChart = () => {


    const { height: screenHeight } = Dimensions.get('window');



    const wsdata = useWsData('dev');
    const [barData, setBarData] = useState([]);
    const [minMax, setMinMax] = useState({ min: 0, max: 13 });


    useEffect(() => {
        if (wsdata && wsdata.sections && wsdata.sections.a) {
            const sectionA = wsdata.sections.a;
            const formattedData = [
                { x: ' ', y: 0 },
                ...Object.keys(sectionA).map(key => ({ x: key, y: parseFloat(sectionA[key]) }))
            ];
            setBarData(formattedData);

            // console.log(barData)
        }
    }, [wsdata]);


    const columns = ['a1', 'a2', 'a3', 'a4'];


    function gramosANewtons(gramos) {
        const g = 9.81;  // Aceleración debida a la gravedad en m/s^2
        let masaEnKg = gramos / 1000;  // Convertir gramos a kilogramos
        let fuerza = masaEnKg * g;    // Calcular la fuerza (tensión) en newtons
        return fuerza.toFixed(2);
    }


    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '' }}>

                <VictoryChart width={Dimensions.get('window').width}
                    height={Math.min(screenHeight, 500)} domain={{ y: [minMax.min, minMax.max] }}>
                    <VictoryAxis
                        tickValues={[' ', ...Object.keys(wsdata?.sections?.a || {}), 'a5']}
                        tickFormat={[' ', ...Object.keys(wsdata?.sections?.a || {}), '']}
                    />
                    <VictoryAxis dependentAxis />

                    {columns.map(column => (
                        <VictoryBar
                            key={column}
                            data={[{ x: column, y0: 3, y: 9 }]}
                            style={{ data: { fill: areaColor } }}  // Naranja para areas de mins y max
                            barWidth={BAR_WIDTH}
                        />
                    ))}
                    <VictoryLine
                        data={[{ x: ' ', y: 3 }, { x: 'a5', y: 3 }]}
                        style={{ data: { stroke: areaColor, strokeWidth: 2 } }}
                    />
                    <VictoryLine
                        data={[{ x: ' ', y: 9 }, { x: 'a5', y: 9 }]}
                        style={{ data: { stroke: areaColor, strokeWidth: 2 } }}
                    />

                    <VictoryBar
                        data={barData}
                        x="x"
                        y="y"
                        barWidth={BAR_WIDTH}
                        style={{ data: { fill: barColor } }}  // Azul para datos principales
                    />
                </VictoryChart>
            </View >
            <View style={styles.dataContainer}>
                {barData.slice(1).map((data, index) => (
                    <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: 'black', marginRight: 5, fontWeight: '700' }}>  {/* marginRight para dar espacio entre los textos */}
                            {data.x}
                        </Text>
                        <Text style={styles.dataText}>
                            {data.y.toFixed(2)} N
                        </Text>
                    </View>
                ))}
            </View>

            <View>
                <View style={styles.legend}>
                    <View style={[styles.legendColor, { backgroundColor: areaColor }]}></View>
                    <Text style={styles.legendText}>Rango de valores recomendados</Text>
                </View>
                <View style={styles.legend}>
                    <View style={[styles.legendColor, { backgroundColor: barColor }]}></View>
                    <Text style={styles.legendText}>Valores actuales en Newtons</Text>
                </View>
            </View>
        </ScrollView>


    );
}

export default BarChart;


const styles = StyleSheet.create({
    dataText: {
        fontSize: 14,
        margin: 2,
        fontWeight: 'bold',
        color: barColor
    },
    legend: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    legendColor: {
        width: 16,
        height: 16,
        marginRight: 5,
    },
    legendText: {
        fontSize: 12,
    },
    dataContainer: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        margin: 10,
        alignItems: 'center' // Centra horizontalmente los hijos
    },
});
