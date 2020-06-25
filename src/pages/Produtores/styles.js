import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({

    spinnerTextStyle: {
        color: "#fff",
        fontSize: 25,
    },
    container: {
        backgroundColor: "#005200",
        flex: 1,
    },
    header: {
        width: "100%",
        height: 116,
        alignItems: "center",
        zIndex: 3,
        marginBottom:12,
    },
    headerContent: {
        width: "100%",
        flex: 1,
        position: "absolute",
    },
    logo: {
        marginTop: 4,
        position: "absolute",
        width: "100%",
        height: 110,
    },
    arrow: {
        height: 40,
        width: 40,
        zIndex: 2,
    },
    body: {
        marginTop: "10%",
        margin: 2,
        alignContent: "center",
        zIndex: 0,
    },
    nomeCidade: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 4,
    },

    produtor: {
        marginTop: 20,
        minHeight: 260,
        padding: 4,
        backgroundColor: "#30a030",
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        alignContent: "center",
        margin: 4,
        zIndex: 2,
        borderRadius: 8,
    },
    produtorImg: {
        marginTop: 4,
        marginBottom: 6,
        flex: 1,
        width: "86%",
        height: 180,
        borderRadius: 8,
    },

    produtorValue: {
        fontSize: 20,
        fontWeight: "200",
        color: "#fff",
    },
    produtorDesc: {
        textAlign: "center",
        fontSize: 14,
        color: "#ededed",
    },

    foot: {
        marginTop: 8,
        flexDirection: "column",
        backgroundColor: "#28a745",
        width: "100%",
        height: 280,
        bottom: 0,
    },
    infoFoot: {
        marginVertical: 8,
        marginBottom: 0,
    },
    infoFootText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "700",
    },
    imgContainerFoot: {
        flexDirection: "row",
        alignContent: "center",
    },
    buttonDacg: {
        width: 100,
        height: 50,
    },
    imgFootDacg: {
        width: 74,
        height: 58,
    },
    buttonEmcomp: {
        marginTop: 4,
        marginLeft: 6,
        width: 170,
        height: 52,
    },
    imgFootEmcomp: {
        width: 170,
        height: 52,
    },
    buttonKnowhow: {
        left: 16,
        width: 80,
        height: 60,
    },
    imgFootKnowhow: {
        width: 80,
        height: 60,
    },
    buttonIf: {
        width: "100%",
        height: 60,
    },
    imgFootIf: {
        left: 2,
        width: 300,
        height: 70,
    },
    copyright: {
        width: "100%",
        height: 50,
        position: "absolute",
        backgroundColor: "#333333",
        bottom: 0,
    },
    copyrightText: {
        top: 8,
        textAlign: "center",
        fontSize: 20,
        color: "#ccc",
    },
});
