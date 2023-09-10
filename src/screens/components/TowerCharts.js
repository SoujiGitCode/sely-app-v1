import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryLine, VictoryArea } from 'victory-native';
import useWebSocketData from "../../../CustomHooks/useWsData";


const styles = StyleSheet.create({
    dataText: {
        fontSize: 14,
        margin: 2,
        fontWeight: 'bold'
    }
});


const BarChart = () => {

    const { height: screenHeight } = Dimensions.get('window');



    const wsdata = useWebSocketData('dev');
    const [barData, setBarData] = useState([]);

    useEffect(() => {
        if (wsdata && wsdata.sections && wsdata.sections.a) {
            const sectionA = wsdata.sections.a;
            const formattedData = [
                { x: ' ', y: 0 },
                ...Object.keys(sectionA).map(key => ({ x: key, y: sectionA[key] }))
            ];
            setBarData(formattedData);
        }
    }, [wsdata]);

    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ position: 'absolute', top: 0, backgroundColor: 'white', zIndex: 10 }}>
                    {barData.slice(1).map((data, index) => (
                        <Text key={index}>{`${data.x}: ${data.y}`}</Text>
                    ))}
                </View>
                <VictoryChart width={Dimensions.get('window').width}
                    height={Math.min(screenHeight, 500)} domain={{ y: [null, 1500] }}>
                    <VictoryAxis
                        tickValues={[' ', ...Object.keys(wsdata?.sections?.a || {}), 'a5']}
                        tickFormat={[' ', ...Object.keys(wsdata?.sections?.a || {}), '']}
                    />
                    <VictoryAxis dependentAxis />

                    <VictoryArea
                        data={[
                            { x: ' ', y0: 300, y: 900 },
                            { x: 'a5', y0: 300, y: 900 }
                        ]}
                        style={{ data: { fill: 'lightgreen', stroke: 'green', strokeWidth: 1 } }}
                    />
                    <VictoryLine
                        data={[{ x: ' ', y: 300 }, { x: 'a5', y: 300 }]}
                        style={{ data: { stroke: 'green', strokeWidth: 2 } }}
                    />
                    <VictoryLine
                        data={[{ x: ' ', y: 900 }, { x: 'a5', y: 900 }]}
                        style={{ data: { stroke: 'green', strokeWidth: 2 } }}
                    />

                    <VictoryBar data={barData} x="x" y="y" />
                </VictoryChart>
            </View >
        </ScrollView>


    );
}

export default BarChart;
