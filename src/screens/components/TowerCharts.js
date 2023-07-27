import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { 
    VictoryChart,
    VictoryArea,
    VictoryBar,
    VictoryStack
} from 'victory-native';
import { getRandomInt, defaultData, defaultMultiBar, transformData, staticBlankLimit } from '../../utils';

const RadarChart = ({}) => {
    const [customData, setCustomData] = useState(defaultData);
    const dataset = transformData(defaultMultiBar);

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
            <VictoryChart
                width={400} height={400}
                domainPadding={{ x: 20 }}
            >
                <VictoryArea
                    style={{
                    data: { fill: "white", stroke: "white" }
                    }}
                    data={staticBlankLimit}
                />
                <VictoryStack colorScale={["green", "orange", "red"]}>
                    { dataset.map((data, i) => { return <VictoryBar data={data} key={i}/>; }) }
                </VictoryStack>
                <VictoryBar
                    style={{
                        data: { fill: "blue", stroke: "black" }
                    }}
                    data={customData}
                />
            </VictoryChart>
        </View>
    );
}

export default RadarChart;
