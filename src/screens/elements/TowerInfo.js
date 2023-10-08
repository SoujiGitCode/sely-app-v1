import React, { Fragment, useEffect, useState } from 'react';
import { DataTable } from 'react-native-paper';
import useWsData from "../../../CustomHooks/useWsData";
import { StyleSheet, Text, View } from "react-native";
import RetryConnection from "./RetryConnection";

const optionsPerPage = [2, 3, 4];

const TowerInfo = (props) => {
    const gap = 10
    const base = 75

    const [n1, setN1] = useState(null)
    const [n2, setN2] = useState(null)
    const [n3, setN3] = useState(null)
    const [n4, setN4] = useState(null)

    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    const wsdata = useWsData('dev');

    useEffect(() => {
        if (wsdata == null) return console.log('ws connection error')
        //console.log(wsdata.sections?.a)
        setN1(wsdata.sections?.a.a1)
        setN2(wsdata.sections?.a.a2)
        setN3(wsdata.sections?.a.a3)
        setN4(wsdata.sections?.a.a4)
    }, [wsdata]);

    function setColor(recommendedVal, currentVal, gap) {
        if (currentVal <= recommendedVal + gap && currentVal >= recommendedVal - gap) { return styles.green; }
        if (currentVal < recommendedVal + gap) { return styles.red; }
        if (currentVal > recommendedVal + gap) { return styles.purple; }
    }


    return (
        <Fragment >
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Cable</DataTable.Title>
                    <DataTable.Title numeric>Recommended</DataTable.Title>
                    <DataTable.Title numeric>Current</DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                    <DataTable.Cell>A1</DataTable.Cell>
                    <DataTable.Cell numeric ><Text style={styles.green}>{base}</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style={setColor(base, n1, gap)}>{n1}</Text></DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>A2</DataTable.Cell>
                    <DataTable.Cell numeric style={styles.green}><Text style={styles.green}>{base}</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style={setColor(base, n2, gap)}>{n2}</Text></DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>A3</DataTable.Cell>
                    <DataTable.Cell numeric style={styles.green}><Text style={styles.green}>{base}</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style={setColor(base, n3, gap)}>{n3}</Text></DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>A4</DataTable.Cell>
                    <DataTable.Cell numeric style={styles.green}><Text style={styles.green}>{base}</Text></DataTable.Cell>
                    <DataTable.Cell numeric><Text style={setColor(base, n4, gap)}>{n4}</Text></DataTable.Cell>
                </DataTable.Row>

                <DataTable.Pagination
                    page={page}
                    numberOfPages={4}
                    onPageChange={(page) => setPage(page)}
                    label="1 of 4"
                    optionsPerPage={optionsPerPage}
                    itemsPerPage={itemsPerPage}
                    setItemsPerPage={setItemsPerPage}
                    showFastPagination
                    optionsLabel={'Rows per page'}
                />
            </DataTable>

            <RetryConnection />
        </Fragment>


    );
}

export default TowerInfo;


const styles = StyleSheet.create({
    green: {
        color: "#32a38e"
    },
    purple: {
        color: "#9b10b7"
    },
    red: {
        color: "#dd2e2e"
    },
    cGreen: {
        alignItems: "center",
        justifyContent: "center",
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#529CC0",
    },
    cPurple: {
        alignItems: "center",
        justifyContent: "center",
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#529C47",
        marginHorizontal: 10
    },
    cRed: {
        alignItems: "center",
        justifyContent: "center",
        height: 20,
        width: 20,
        borderRadius: 15,
        backgroundColor: "#E2443B",
    },

});