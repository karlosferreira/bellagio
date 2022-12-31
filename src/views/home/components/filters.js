import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Tag from "../../components/tag";

const data = [
    {
        name: 'Todos',
        isActive: true
    },
    {
        name: 'Favoritos',
        isActive: false
    },
    {
        name: 'Lançamentos',
        isActive: false
    },
    {
        name: 'Jogados Recentemente',
        isActive: false
    },
    {
        name: 'Baralho',
        isActive: false
    },
    {
        name: 'Caça-Níqueis',
        isActive: false
    },
    {
        name: 'Baseado em Turnos',
        isActive: false
    },
    {
        name: 'Loterias',
        isActive: false
    },
    {
        name: 'Gratis',
        isActive: false
    },
    {
        name: 'Mais Jogados',
        isActive: false
    },
]

export default function Filters() {
    return <>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true} 
            style={styles.tagList}            
            data={data}

            renderItem={
                ({item}) => <>
                    <Tag name={item.name} active={item.isActive} />
                </>
            }
        />
    </>
}

const styles = StyleSheet.create({
    tagList: {
        flexDirection: "row",
        paddingLeft: 7,
        marginTop: 8.5,
        marginBottom: 13.5,
    }
});