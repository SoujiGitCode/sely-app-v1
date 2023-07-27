import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: 15,
    },
    title: {
        fontSize: 25,
        marginTop: 30,
    },
    chartContainer: {
        flex: 1,
        backgroundColor: "#FFF",
        width: "100%",
        paddingHorizontal: 20,
    },
    legendContainer: {
        flex: 0.4,
        backgroundColor: "#FFF",
        width: "100%",
        paddingHorizontal: 20,
    }
});

export default styles;