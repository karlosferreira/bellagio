import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Item from "../../components/item";

import blackjackCover from "../../../assets/covers/blackjack.jpg";
import jackpotCover from "../../../assets/covers/jackpot.jpg";
import slotsCover from "../../../assets/covers/slots.jpg";
import dicesCover from "../../../assets/covers/dices.jpeg";
import roletaCover from "../../../assets/covers/roleta.jpg";
import rocketCover from "../../../assets/covers/rocket.jpg";
import wheelCover from "../../../assets/covers/wheel.jpg";

const data = [
    {
        title: '21',
        img: blackjackCover
    },
    {
        title: 'Slots',
        img: slotsCover
    },
    {
        title: 'Dices',
        img: dicesCover
    },
    {
        title: 'Roleta',
        img: roletaCover
    },
    {
        title: 'Rocket',
        img: rocketCover
    },
    {
        title: 'Jackpot',
        img: jackpotCover
    },
    {
        title: 'Furtune Weel',
        img: wheelCover
    },    
    {
        title: '21',
        img: blackjackCover
    },
    {
        title: 'Slots',
        img: slotsCover
    },
    {
        title: 'Dices',
        img: dicesCover
    },
    {
        title: 'Roleta',
        img: roletaCover
    },
    {
        title: 'Rocket',
        img: rocketCover
    },
    {
        title: 'Jackpot',
        img: jackpotCover
    },
    {
        title: 'Furtune Weel',
        img: wheelCover
    },
    {
        title: '21',
        img: blackjackCover
    },
    {
        title: 'Slots',
        img: slotsCover
    },
    {
        title: 'Dices',
        img: dicesCover
    },
    {
        title: 'Roleta',
        img: roletaCover
    },
    {
        title: 'Rocket',
        img: rocketCover
    },
    {
        title: 'Jackpot',
        img: jackpotCover
    },
    {
        title: 'Furtune Weel',
        img: wheelCover
    },
]

export default function Games() {
    return <>
        <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}

            renderItem={
                ({item}) => <>
                    <Item title={item.title} img={item.img} />
                </>
            }
        />
    </>
}

const styles = StyleSheet.create({

})