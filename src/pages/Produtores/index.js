import React, { useEffect, useState, useLinking } from "react";

import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Feather, AntDesign, FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";

import Produtor from '../Produtores/Produtores/produtor';

import Spinner from 'react-native-loading-spinner-overlay';


import api from "../../services/api";


export default function Produtores() {
    const route = useRoute();
    const navigation = useNavigation();
    const idTipo = route.params.idCat;
    const idCidade = route.params.idCidade;
    const nomeCidade = route.params.nomeCidade;
    const nomeCat = route.params.nomeCat;
    const [produtores, setProdutores] = useState([]);
    const [spinner, setSpinner] = useState(true);

    function navigateBack() {
        navigation.goBack();
    }

    async function loadProdutores() {
        const response = await api.get(
            "/filtro/produtores/" + idCidade + "/" + idTipo
        );
        setProdutores(response.data.data);
        setSpinner(false);
    }

    useEffect(() => {
        loadProdutores();   
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
                <ScrollView style={styles.body}>
                    <View>
                        <Text style={styles.nomeCidade}>{nomeCidade}/{nomeCat}</Text>
                    </View>
                    <ScrollView>
                        {
                        produtores.map((prod) => {
                            return (

                                <Produtor produtor={prod} key={prod.idProdutor} />

                            )
                        })
                        }
                    </ScrollView>
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
                            <AntDesign size={20} color="#ccc" name="copyright" /> 2020 Copyright - EmComp
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}