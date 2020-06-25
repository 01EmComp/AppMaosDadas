import React from 'react';
import {TouchableOpacity,Image, Text} from 'react-native';
import styles from "../../Cidade/styles";

import { useNavigation} from "@react-navigation/native";

export default function Produtor({produtor}) {
    const navigation = useNavigation();
    function navigateToDetalhes(idProdutor) {
        navigation.navigate("Detalhes", { idProdutor });
    }
    return (
        <TouchableOpacity
            style={styles.produtor}
            onPress={() => {
                navigateToDetalhes(produtor.idProdutor);
            }}
        >
            <Image
                style={styles.produtorImg}
                source={{
                    uri:
                        `http://projetomaosdadas.emcomp.com.br/public/img/produtores/${produtor.img}`,
                }}
            />
            <Text style={styles.produtorValue}>
                {produtor.nomeProdutor}
            </Text>
            <Text style={styles.produtorDesc}>
                {produtor.descricao}
            </Text>
        </TouchableOpacity>
    )
}