import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ColorBox from '../ColorBox';

const LegendBox = ({ color, text }) => {
    return (
        <View
            style={{ display: 'flex', flexDirection: 'row', marginTop: 5 }}
        >
            <ColorBox color={color} />
            <Text style={{ paddingLeft: 10 }}>{text}</Text>
        </View>
    );
}

export default LegendBox;
