/* Site-wide JS i den här filen (t.ex. huvudmenyn) */

console.log('main.js init'); // För att se att skriptet laddats in

//username
function sirClick() {
    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    const firstLetter = fname[0];

    if (fname === "" || lname === "") {
        document.querySelector("#error-message").innerText = `Fill in both fields `
    }
    else {
        document.querySelector("#error-message").innerText = ``
        document.querySelector("#username-output").innerText = `Your username is Sir ${firstLetter}. ${lname}!`;
        const username = "Sir " + firstLetter + ". " + lname;
        alert(`Welcome ${username}`);
    }


}

function madamClick() {
    const fname = document.querySelector("#fname").value;
    const lname = document.querySelector("#lname").value;
    const firstLetter = fname[0];

    if (fname === "" || lname === "") {
        document.querySelector("#error-message").innerText = `Fill in both fields `
    }
    else {
        document.querySelector("#error-message").innerText = ``
        document.querySelector("#username-output").innerText = `Your username is Madam  ${firstLetter}. ${lname}!`;
        const username = "Madam " + firstLetter + ". " + lname;
        alert(`Welcome ${username}`);
    }
}



//klocan
function myClock() {
    const today = new Date;
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    document.querySelector("#klockan").innerHTML = `${hour}:${minute}:${second}`;

    /*if (second < 10) {
        i = "0" + i;
        return i;
    }
    if (minute < 10) {
        j = "0" + j;
        return j;
    }*/


}
setInterval(myClock, 1000);

function myDate() {
    const date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    document.querySelector("#datum").innerHTML = `${day}.${month + 1}.${year}`;
}


<<<<<<< HEAD





=======
//navigation dropdown

function openNav () {
    document.querySelector("#navigationContent").style = "display: block;";
}

function closeNav (){
    document.querySelector("#navigationContent").style = "display: none;";
}

window.addEventListener('click', (evt) => {
    if (evt.target !== navigationButton) {
        closeNav();
    }
});
>>>>>>> 71d86fde341cbc23f1a4d3e40a84d461b14fbc76


const länkarna = [
    {destination: "home",                  länk: ""},
    {destination: "rock, paper, scissors", länk: ""},
    {destination: "memory-game",           länk: ""},
];

for (const link of länkarna) {
    document.querySelector("#länkarna").innerHTML += `
    <li>${link.destination} länken här <spansrc="${link.länk}"></span>" </li>`
}


//dropdown till färgslider
const knappen = document.querySelector(".knappen");
const dropdownMenu = document.querySelector(".dropdown-menu");

function visaDropdown() {
    dropdownMenu.classList.toggle("visa-menun");
}

knappen.addEventListener("click", function () {
    visaDropdown();
});

function gömDropdown() {
    dropdownMenu.classList.toggle("göm-menun");
}


//färgslider script
let r, g, b;

document.body.style.backgroundColor = `
rgb(${localStorage.getItem("r")}, ${localStorage.getItem("g")}, ${localStorage.getItem("b")})
`;
document.querySelector("#slider-r").value = localStorage.getItem("r");
document.querySelector("#slider-g").value = localStorage.getItem("g");
document.querySelector("#slider-b").value = localStorage.getItem("b");

document.querySelector("#slider-r").addEventListener('input', (evt) => {
    r = evt.target.value;
    document.querySelector("#value-r").innerHTML = r;
});

document.querySelector("#slider-g").addEventListener('input', (evt) => {
    g = evt.target.value;
    document.querySelector("#value-g").innerHTML = g;
});

document.querySelector("#slider-b").addEventListener('input', (evt) => {
    b = evt.target.value;
    document.querySelector("#value-b").innerHTML = b;
});

document.querySelector("#button-color").addEventListener('click', (event) => {
   
    localStorage.setItem("r", r);
    localStorage.setItem("g", g);
    localStorage.setItem("b", b);

    document.body.style.backgroundColor = `
rgb(${localStorage.getItem("r")}, ${localStorage.getItem("g")}, ${localStorage.getItem("b")})
`;
    
if (r < 15 || g < 15 || b < 15) {
        document.body.style.color = `white`;
    }
    else {
        document.body.style.color = `black`;
    }
});


//lightbox script
document.querySelector("#lightbox").style.display = "none"

document.querySelectorAll("#thumbnails img").forEach((elem) => {
    elem.addEventListener('click', () => openLightbox(elem))
});

function openLightbox(elem) {
    const bigPic = elem.dataset.bigpic;
    document.querySelector("#lightbox img").src = bigPic;
    document.querySelector('#lightbox').style.display = "flex";
}

document.querySelector("#lightbox span").addEventListener('click', () => {
    document.querySelector("#lightbox").style.display = "none"
});
