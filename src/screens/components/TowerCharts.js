import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { VictoryChart, VictoryPolarAxis, VictoryTheme, VictoryArea, VictoryLabel, VictoryScatter } from 'victory-native';

function getRandomInt() {
    return Math.floor(Math.random() * 51) + 50;
}

const RadarChart = ({}) => {
    const defaultData = [
        { x: 'A1', y: 90 },
        { x: 'B1', y: 90 },
        { x: 'C1', y: 90 },
        { x: 'D1', y: 90 },
    ];

    const [customData, setCustomData] = useState([
        { x: 'A1', y: 85 },
        { x: 'B1', y: 80 },
        { x: 'C1', y: 100 },
        { x: 'D1', y: 110 },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newData = [
                { x: 'A1', y: getRandomInt() },
                { x: 'B1', y: getRandomInt() },
                { x: 'C1', y: getRandomInt() },
                { x: 'D1', y: getRandomInt() },
            ];
            setCustomData(newData);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5FCFF' }}>
            <VictoryChart polar
                          theme={VictoryTheme.material}
                          domain={{ y: [0, 150] }}
            >
                <VictoryPolarAxis
                    dependentAxis
                    labelPlacement="vertical"
                    style={{ tickLabels: { fontSize: 8, padding: 10 } }}
                />
                <VictoryPolarAxis
                    labelPlacement="parallel"
                    tickValues={['A1', 'B1', 'C1', 'D1']}
                    tickFormat={() => ''}
                    style={{ axis: { stroke: 'none' } }}
                />
                <VictoryArea
                    data={defaultData}
                    style={{ data: { fill: '#C43A31', fillOpacity: 0.2, stroke: '#C43A31', strokeWidth: 2 } }}
                />
                <VictoryScatter
                    data={defaultData}
                    size={3}
                    style={{ data: { fill: 'blue' } }}
                    labels={({ datum }) => datum.y}
                    labelComponent={<VictoryLabel style={{ fontSize: 8 }} />}
                />
                <VictoryArea
                    data={customData}
                    style={{ data: { fill: 'grey', fillOpacity: 0.2, stroke: 'grey', strokeWidth: 2 } }}
                />
                <VictoryScatter
                    data={customData}
                    size={3}
                    style={{ data: { fill: 'black' } }}
                    labels={({ datum }) => datum.y}
                    labelComponent={<VictoryLabel style={{ fontSize: 8 }} />}
                />
            </VictoryChart>
        </View>
    );
}

export default RadarChart;
