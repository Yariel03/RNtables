import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    celdas: {
        width: 100,
    },
    row: {
        flexDirection: "row",
        borderBottomWidth: 1,
    }
    ,
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%",
        flexDirection: "column",
        width: "100%",

    }
    , textBody: {
        fontSize: 10,
        color: "black",
        textAlign: "justify",
        margin: 5,
    }, textHeader: {
        fontSize: 12,
        fontWeight: "bold",
        color: "black",
        textAlign: "justify",
        margin: 5,
    },
    celdasRow: {
        backgroundColor: "lightgray",
        shadowOffset: { width: 0, height: 100 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 15,


    },
    celdaPar: {
        backgroundColor: "#a9f9f9",
    },
    celdaHeader: {
        backgroundColor: "lightgray",
        flexDirection: "column",
    }

})