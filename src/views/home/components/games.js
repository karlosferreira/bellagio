import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Item from "../../components/item";

import gamesMock from "../../../mocks/games"; 

export default function Games() {
    return <>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={gamesMock.content.items}
            numColumns={2}

            renderItem={
                ({item}) => <>
                    <Item title={item.title} img={item.cover_url} />
                </>
            }
        />
    </>
}

const styles = StyleSheet.create({

})