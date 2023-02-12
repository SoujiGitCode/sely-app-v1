import React, {useEffect, useState} from 'react';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const TowerInfo = () => {
    const [a1, setA1] = useState(80)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setA1(getRandomInt());
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);


    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    function getRandomInt() {
        return Math.floor(Math.random() * (100 - 50 + 1) + 50);
    }

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Cable</DataTable.Title>
                <DataTable.Title numeric>Recommended</DataTable.Title>
                <DataTable.Title numeric>Current</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
                <DataTable.Cell>A1</DataTable.Cell>
                <DataTable.Cell numeric>90</DataTable.Cell>
                <DataTable.Cell numeric>{a1}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>A2</DataTable.Cell>
                <DataTable.Cell numeric>93</DataTable.Cell>
                <DataTable.Cell numeric>{getRandomInt()}</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell>A3</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
                <DataTable.Cell numeric>{getRandomInt()}</DataTable.Cell>
            </DataTable.Row>


            <DataTable.Pagination
                page={page}
                numberOfPages={4}
                onPageChange={(page) => setPage(page)}
                label="1-2 of 6"
                optionsPerPage={optionsPerPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                showFastPagination
                optionsLabel={'Rows per page'}
            />
        </DataTable>
    );
}

export default TowerInfo;