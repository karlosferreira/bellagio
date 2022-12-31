import blackjackCover from "../assets/covers/blackjack.jpg";
import jackpotCover from "../assets/covers/jackpot.jpg";
import slotsCover from "../assets/covers/slots.jpg";
import dicesCover from "../assets/covers/dices.jpeg";
import roletaCover from "../assets/covers/roleta.jpg";
import rocketCover from "../assets/covers/rocket.jpg";
import wheelCover from "../assets/covers/wheel.jpg";

const gamesMock = {
    header: {
        wallet: [
            {
                coin: "BRL",
                founds: "0 R$"
            },
            {
                coin: "USD",
                founds: "0 $"
            },
        ],
        title: "Bet21",
        darkMode: true
    },
    content: {
        tags: [
            {
                name: "Novidades",
                target: "/"
            },
            {
                name: "Favoritos",
                target: "0 BRL"
            },
            {
                name: "Jogue de Novo",
                target: "0 BRL"
            },
            {
                name: "BRL",
                target: "0 BRL"
            },
            {
                name: "BRL",
                target: "0 BRL"
            },
            {
                name: "BRL",
                target: "0 BRL"
            },
            {
                name: "BRL",
                target: "0 BRL"
            },
            {
                name: "BRL",
                target: "0 BRL"
            },
            {
                name: "BRL",
                target: "0 BRL"
            },            
        ],
        items: [
            {
                title: "21",
                cover_url: blackjackCover
            },
            {
                title: "Slots",
                cover_url: jackpotCover
            },
            {
                title: "Dices",
                cover_url: slotsCover
            },
            {
                title: "Rolleta",
                cover_url: dicesCover
            },
            {
                title: "Rocket",
                cover_url: roletaCover
            },
            {
                title: "Jackpot",
                cover_url: rocketCover
            },
            {
                title: "Furtune Wheel",
                cover_url: wheelCover
            }
        ]
    },
} 

export default gamesMock;