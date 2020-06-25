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
    alignItems: "center",
    textAlign: "center",
    alignContent: "center",
  },
  header: {
    width: "100%",
    height: 112,
    alignItems: "center",
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
  nome: {
    color: "#fff",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "700",
    margin: 4,
  },
  body: {
    backgroundColor: "#30a030",
    marginTop: 10,
    width: "100%",
    marginBottom: "2%",
    borderRadius: 8,
  },
  produtorImg: {
    flex: 1,
    width: 330,
    height: 200,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 8,
  },
  desc: {
    color: "#fff",
    textAlign: "left",
    marginLeft: 14,
    fontSize: 16,
    fontWeight: "200",
  },
  infos: {
    color: "#fff",
    textAlign: "left",
    marginLeft: 14,
    fontSize: 16,
    fontWeight: "200",
  },
  label: {
    backgroundColor: "#30a030",
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 14,
  },
  whats: {
    backgroundColor: "#30a030",
    color: "#005599",
    fontSize: 16,
  },
  footWhats: {
    backgroundColor: "#30a030",
    flex: 1,
    marginTop: "10%",
    marginBottom: 10,
  },
  wppImg: {
    alignSelf: "center",
    width: 240,
    height: 66,
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
