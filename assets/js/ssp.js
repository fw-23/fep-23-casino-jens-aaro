/* Exempel på JS-fil för specifik sida (ssp-sidan i det här fallet) */

console.log('ssp.js init'); // För att se att skriptet laddats in

const houseplay = document.getElementById("#houseplay")

const resultshow = document.getElementById("#resultat")

const houseopt =[
    "sten",
    "sax",
    "påse"

]


const result=[
    "WIN",
    "Lose",
    "Tie"
]
function start(input){
    const houseindex = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(houseopt[houseindex])
}














