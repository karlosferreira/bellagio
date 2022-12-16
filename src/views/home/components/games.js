import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import Item from "../../components/item";

import blackjackCover from "../../../assets/covers/blackjack.jpg";
import jackpotCover from "../../../assets/covers/jackpot.jpg";

const images = [
    {
        alt: 'blackjack',
        img: blackjackCover
    },
    {
        alt: 'jackpot',
        img: jackpotCover
    }
]

export default function Games() {
    return <>
        <ScrollView 
        showsVerticalScrollIndicator={false} >
            <Item title={"21"} img={images[0].img} />
            <Item title={"Slot"} img={images[1].img} />
            <Item title={"Dices"} img={images[0].img} />
            <Item title={"Lucky Wheel"} img={images[1].img} />
            <Item title={"Roulette"} img={images[0].img} />
            <Item title={"Farmer"} img={images[1].img} />
            <Item title={"Rocket"} img={images[0].img} />
            <Item title={"Heads or Tails"} img={images[1].img} />
            <Item title={"Wheel to Wheel"} img={images[0].img} />
        </ScrollView>
    </>
}

const styles = StyleSheet.create({

})