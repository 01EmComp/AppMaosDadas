import React, { useEffect, useState } from "react";

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Feather, AntDesign } from "@expo/vector-icons";

import styles from "./styles";

import api from "../../services/api";

import Spinner from 'react-native-loading-spinner-overlay';

export default function Detalhes() {
  const message = "Olá, gostária de fazer uma compra.";
  const route = useRoute();
  const idProdutor = route.params.idProdutor;
  const navigation = useNavigation();
  const [spinner, setSpinner] = useState(true);
  const [produtor, setProdutor] = useState({});

  function navigateBack() {
    navigation.goBack();
  }

  async function loadprodutor() {
    const response = await api.get("/api/selectprodutor/" + idProdutor);
    setProdutor(response.data.data);
    setSpinner(false);
  }

  function sendWhatsapp(whats) {
    Linking.openURL(`whatsapp://send?phone=${whats}=${message}`);
  }

  useEffect(() => {
    loadprodutor();
  }, []);

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
        <ScrollView>
          <View style={styles.body}>
            <Text style={styles.nome}>{produtor.nomeProdutor}</Text>
            <Image
              style={styles.produtorImg}
              source={{
                uri:
                  "http:\\projetomaosdadas.emcomp.com.br/public/img/produtores/" +
                  produtor.img,
              }}
            />
            <Text style={styles.label}>
              Descrição:
            <Text style={styles.desc}> {produtor.descricao}</Text>
            </Text>
            <Text style={styles.label}>
              Forma(s) de Entrega:
            <Text style={styles.infos}> {produtor.formaEntrega}</Text>
            </Text>
            <Text style={styles.label}>
              Forma(s) de Pagamento:
            <Text style={styles.infos}> {produtor.formaPagamento}</Text>
            </Text>
            <Text style={styles.label}>
              Endereço:
            <Text style={styles.infos}>
                {" "}
                {produtor.endereco}, {produtor.nomeCidade}
              </Text>
            </Text>
            <TouchableOpacity
              onPress={() => {
                sendWhatsapp(produtor.whatsapp);
              }}
            >
              <Text style={styles.label}>
                imgContainerFoot:
              <Text style={styles.whats}> {produtor.whatsapp}</Text>
              </Text>
            </TouchableOpacity>

            <View style={styles.footWhats}>
              <TouchableOpacity
                onPress={() => {
                  sendWhatsapp(produtor.whatsapp);
                }}
              >
                <Image
                  style={styles.wppImg}
                  source={{
                    uri:
                      "http:\\projetomaosdadas.emcomp.com.br/public/img/wpp.png",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
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
      </ScrollView>
    </View>
  );
}
