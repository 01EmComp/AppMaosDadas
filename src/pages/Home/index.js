import React, { useEffect, useState } from "react";

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

import api from "../../services/api";

import Spinner from 'react-native-loading-spinner-overlay';

export default function Home() {
  const navigation = useNavigation();
 
  const [spinner, setSpinner] = useState(true);

  function navigateToCidade(idCidade, nome) {
    navigation.navigate("Cidade", { idCidade, nome });
  }

  const [cidades, setCidades] = useState([]);
  const [notificacao, setNotificacao] = useState([]);

  async function loadCidades() {
    const response = await api.get("/api/getcidades");
    setCidades();
    setCidades([...cidades, ...response.data]);
    setSpinner(false);
  }

  async function loadNotifys() {
    const response = await api.get("/api/notificacoes");
    setNotificacao(response.data);
    //console.log(response.data);
  }

  function openUrl(url) {
    Linking.openURL(url);
  }

  useEffect(() => {
    loadNotifys();
    if (cidades.length == 0) {
      loadCidades();
    }
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
          <Image
            style={styles.logo}
            source={{
              uri:
                "http:\\projetomaosdadas.emcomp.com.br/public/img/Logo-projeto.png",
            }}
          />
        </View>
        {
        notificacao.length > 0
          ? notificacao.map((not) => {
              return (
                <View style={styles.notifyContainer}>
                  <Text style={styles.notifyTitle}>{not.title}</Text>
                  <Text style={styles.notifyBody}>{not.body}</Text>
                  {
                  not.link.length > 0 ? not.link.map((link) => {
                    return(
                    <TouchableOpacity onPress={()=>{openUrl(String(link.href))}}>
                        <Text style={styles.linkBody}>{link.body}</Text>
                    </TouchableOpacity>
                    )
                  }
                  ):null
                  }
                </View>
              )
            }):null
          }
        <View>
          <TouchableOpacity
            style={styles.buttonCad}
            onPress={() => {
              openUrl(
                "https://docs.google.com/forms/d/e/1FAIpQLSdbhwCwCqRhKw8SoCnrUfhF4DUtEpThjgbNc7d6CCP0SOCvmQ/viewform"
              );
            }}
          >
            <Text style={styles.buttonCadText}>Cadastro de Produtor</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.cidades}>
          <FlatList
            style={styles.cidadesList}
            data={cidades}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.nome)}
            renderItem={({ item: cidades }) => (
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => {
                  navigateToCidade(cidades.idCidade, cidades.nome);
                }}
              >
                <View style={styles.cidade}>
                  <Image
                    style={styles.cidadeImg}
                    source={{
                      uri:
                        "http:\\projetomaosdadas.emcomp.com.br/public/img/cidades/" +
                        cidades.img,
                    }}
                  />
                  <View style={styles.mask}>
                    <View style={styles.valueContainer}>
                      <Text style={styles.cidadeValue}>{cidades.nome}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
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
