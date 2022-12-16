import React from "react";

import { ScrollView, StyleSheet } from "react-native";

import Tag from "../../components/tag";

export default function Filters() {
    return <>
        <ScrollView 
        horizontal={true} 
        style={styles.tagList}
        showsHorizontalScrollIndicator={false} >
            <Tag name={"Todos"} active={true} />
            <Tag name={"Favoritos"} />
            <Tag name={"Lançamentos"} />
            <Tag name={"Jogados Recentemente"} />
            <Tag name={"Baralho"} />
            <Tag name={"Caça-Níqueis"} />
            <Tag name={"Baseado em Turnos"} />
            <Tag name={"Dados"} />
            <Tag name={"Loterias"} />
            <Tag name={"Gratis"} />
            <Tag name={"Mais Lucrativos"} />
        </ScrollView>
    </>
}

const styles = StyleSheet.create({
    tagList: {
        flexDirection: "row",
        margin: 7,
        height: 34.5
    }
});