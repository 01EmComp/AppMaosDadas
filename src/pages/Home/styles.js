import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    backgroundColor: "#005200",
  },

  spinnerTextStyle: {
    color: "#fff",
    fontSize: 25,
  },
  logo: {
    width: "100%",
    height: 110,
    marginBottom:12,
  },
  notifyContainer: {
    marginTop: 12,
    borderColor: "#ffc107",
    borderWidth: 2,
    borderRadius: 8,
    alignSelf: "center",
    width: "98%",
    backgroundColor: "#f6c739",
  },
  notifyTitle: {
    left: 2,
    paddingLeft: 4,
    color: "#000",
    fontSize: 22,
    fontWeight: "600",
  },
  notifyBody: {
    paddingLeft: 12,
    color: "#000",
    fontSize: 20,
  },
  linkBody:{
    color:"#112299",
    fontSize:20,
    fontWeight:"600",
    paddingLeft: 12,
  },
  buttonCad: {
    alignSelf: "center",
    marginTop: 16,
    width: "98%",
    height: 36,
    backgroundColor: "#28a745",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 8,
  },
  buttonCadText: {
    color: "#fff",
    fontSize: 24,
  },
  cidadesList: {
    minHeight: "100%",
    marginTop: 8,
  },
  cidade: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    zIndex: 0,
  },
  cidadeImg: {
    marginBottom: 6,
    flex: 1,
    width: "96%",
    height: 200,
    borderRadius: 8,
    zIndex: 1,
  },
  valueContainer: {
    width: "100%",
    position: "relative",
    marginTop: 58,
    zIndex: 3,
  },
  cidadeValue: {
    zIndex: 4,
    alignSelf: "center",
    fontSize: 46,
    color: "#fff",
    fontWeight: "700",
  },
  mask: {
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    backgroundColor: "#00000033",
    width: "96%",
    height: 200,
    borderRadius: 8,
    zIndex: 2,
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
