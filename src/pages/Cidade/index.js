import React, { useEffect, useState, useLinking } from "react";

import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";

import Spinner from 'react-native-loading-spinner-overlay';

import api from "../../services/api";

export default function Cidade() {
  const route = useRoute();
  const idCidade = route.params.idCidade;
  const nomeCidade = route.params.nome;
  const navigation = useNavigation();
  const [categorias, setCategorias] = useState([]);
  const [spinner, setSpinner] = useState(true);

  function navigateBack() {
    navigation.goBack();
  }

  function navigateToProdutores(idCat,nomeCat) {
    navigation.navigate("Produtores", { idCat, idCidade, nomeCidade, nomeCat });
  }

  async function loadCategorias() {
    const response = await api.get("/api/getTiposCidade/" + idCidade);
    setCategorias(response.data);
    setSpinner(false);
  }


  useEffect( () => {
   
     loadCategorias();

  },[]);

  return (
    <View style={styles.container}>
      <Spinner
          size="large"
          overlayColor="#04a204a6"
          visible={spinner}
          textContent={'Carregando...'}
          textStyle={styles.spinnerTextStyle}
          />
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TouchableOpacity onPress={navigateBack} style={styles.arrow}>
              <Feather name="chevron-left" size={35} color="#fff" />
            </TouchableOpacity>
            <Image
              style={styles.logo}
              source={{
                uri:
                  "http:\\projetomaosdadas.emcomp.com.br/public/img/Logo-projeto.png",
              }}
            />
          </View>
        </View>
        <ScrollView style={styles.body}>
          <View>
            <Text style={styles.nomeCidade}>{nomeCidade}</Text>
          </View>

          {categorias.map((cat) => {
            return (
              <ScrollView style={styles.categoriasList} >
                <TouchableOpacity
                  onPress={() => {
                    navigateToProdutores(cat.idTipo,cat.nome);
                  }}
                >
                  <View style={styles.catButton}>
                    <View style={styles.catTextContainer}>
                      <Text style={styles.catButtonText}>{cat.nome}</Text>
                    </View>
                    <View style={styles.catIconContainer}>
                      <FontAwesome5
                        color="#fff"
                        size={24}
                        name={cat.icon}
                        style={styles.catIcon}
                      />
                      <FontAwesome5
                        color="#fff"
                        style={
                          (styles.catIcon,
                          { marginTop: 2, alignSelf: "flex-end" })
                        }
                        name="chevron-right"
                        size={24}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            );
          })}
        </ScrollView>

        <View style={styles.foot}>
          <View style={styles.infoFoot}>
            <Text style={{ color: "#fff" }}>Aperte para ver mais.</Text>
            <Text style={styles.infoFootText}>Idealizadores:</Text>
          </View>
          <View style={styles.imgContainerFoot}>
            <TouchableOpacity
              onPress={() => {
                openUrl("http://dacg.riopomba.ifsudestemg.edu.br/");
              }}
              style={styles.buttonFootDacg}
            >
              <Image
                style={styles.imgFootDacg}
                source={{
                  uri:
                    "http:\\projetomaosdadas.emcomp.com.br/public/img/logodacg.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openUrl("https://emcomp.com.br");
              }}
              style={styles.buttonEmcomp}
            >
              <Image
                style={styles.imgFootEmcomp}
                source={{
                  uri:
                    "http:\\projetomaosdadas.emcomp.com.br/public/img/Logo-Emcomp-branca.png",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openUrl("instagram://user?username=knowhowconsultoriajr");
              }}
              style={styles.buttonKnowhow}
            >
              <Image
                style={styles.imgFootKnowhow}
                source={{
                  uri:
                    "http:\\projetomaosdadas.emcomp.com.br/public/img/logoknow.png",
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.infoFoot}>
            <Text style={styles.infoFootText}>Apoio:</Text>
          </View>
          <View style={styles.imgContainerFoot}>
            <TouchableOpacity
              onPress={() => {
                openUrl("https://www.ifsudestemg.edu.br/riopomba");
              }}
              style={styles.buttonIf}
            >
              <Image
                style={styles.imgFootIf}
                source={{
                  uri:
                    "http:\\projetomaosdadas.emcomp.com.br/public/img/if.png",
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.copyright}>
            <Text style={styles.copyrightText}>
              <AntDesign size={20} color="#ccc" name="copyright" /> 2020
              Copyright - EmComp
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
