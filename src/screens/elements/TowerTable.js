import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Table = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Id</Text>
                <Text style={styles.headerText}>Type</Text>
                <Text style={styles.headerText}>Sections</Text>
                <Text style={styles.headerText}>Priority</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.rowText}></Text>
                <Text style={styles.rowText}></Text>
                <Text style={styles.rowText}></Text>
                <Text style={styles.rowText}></Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCCCCC',
        margin: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        paddingBottom: 5,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#000000',
        paddingHorizontal: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    rowText: {
        fontSize: 10,
        color: '#555555',
    },
});

export default Table;
