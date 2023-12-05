/* Exempel på JS-fil för specifik sida (ssp-sidan i det här fallet) */

console.log('ssp.js init'); // För att se att skriptet laddats in

const houseplay = document.getElementById("#houseplay")

const resultshow = document.getElementById("#resultat")

let bet = document.getElementById("#bet")


// 1 står för sten
// 2 står för sax
// 3 står för påse

const houseopt =[
    {name:"sten", wins:2, loss:3},
    {name:"sax",wins:3, loss:1},
    {name:"påse",wins:1, loss:2}

]


const result=[
    "WIN",
    "Lose",
    "Tie"
]
function start(input){
    const houseindex = Math.floor(Math.random() * (2 - (-1)) );
    let houseout = houseopt[houseindex].name
    console.log(houseindex)
    console.log(houseopt[houseindex])
    document.querySelector("#houseplay").innerText=houseout;
    
    
        if(houseopt[houseindex].wins==input){
        document.querySelector("#resultat").innerText=result[1];
        }
   
        else{
            if(houseopt[houseindex].loss==input){
            document.querySelector("#resultat").innerText=result[0];
            }
    
            else{
            document.querySelector("#resultat").innerText=result[2];
            }
            console.log(houseopt[houseindex])
        }   
}














