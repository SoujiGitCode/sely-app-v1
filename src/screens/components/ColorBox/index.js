import React, { useState, useEffect } from 'react';
import { View, Text} from 'react-native';

const ColorBox = ({ color }) => {
    return (
        <View style={{
            height: 20,
            width: 20,
            backgroundColor: color
        }}>
        </View>
    );
}

export default ColorBox;
