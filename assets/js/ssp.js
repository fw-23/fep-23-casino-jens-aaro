/* Exempel på JS-fil för specifik sida (ssp-sidan i det här fallet) */

console.log('ssp.js init'); // För att se att skriptet laddats in

const player =document.getElementById("vale")

const houseplay = document.getElementById("houseplay")

const resultshow = document.getElementById("resultat")

const ssp=[
    {name:"sten",win:"sax",los:"pas"},
    {name:"sax",win:"pas",los:"sten"},
    {name:"pas",win:"sten",los:"sax"},
]
const result=[
    "WIN",
    "Lose",
    "Tie"
]






function start(){
    result.innerHTML=result[player.selectedIndex]
}
