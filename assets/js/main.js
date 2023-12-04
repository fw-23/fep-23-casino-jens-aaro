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



}
setInterval(myClock, 1000);

function myDate() {
    const date = new Date;
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    document.querySelector("#datum").innerHTML = `${day}.${month + 1}.${year}`;
}


window.addEventListener("load", function () {
    let selectDayElement = document.querySelector("#selectDay");
    let currentDay = new Date();

    // Set the initial value of the select box to the current day
    selectDayElement.value = currentDay.getDay().toString();

    let selectedDay = selectDayElement.value;

document.querySelector("#selectDay").addEventListener("change", function (event) {
    selectedDay = event.target.value;
    websiteStatus(selectedDay);
});

function websiteStatus(selectedDay) {
    const weekDay = parseInt(selectedDay);
    const daysOpen = [1, 2, 3, 4, 5];

    const openWebsite = daysOpen.includes(weekDay);

    if (openWebsite) {
        alert("website is open");
    } else {
        let untilOpen;

        if (currentDay.getDay() === 6) {
            untilOpen = 1;
        } else if (currentDay.getDay() === 0) {
            untilOpen = 2;
        } else {
            untilOpen = 0;
        }

        currentDay.setDate(currentDay.getDate() - currentDay.getDay() + parseInt(selectedDay));

        let monday = new Date(currentDay);
        monday.setDate(currentDay.getDate() + untilOpen);
        monday.setHours(0, 0, 0, 0);

        const timer = monday - currentDay;

        const hours = Math.floor(timer / (1000 * 60 * 60));
        const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timer % (1000 * 60)) / 1000);

        alert("website is closed " + hours + ":" + minutes + ":" + seconds);
    }
}

websiteStatus(selectedDay);
});



function openNav () {
    document.querySelector("#navigationContent").style = "display: block;";
    console.log("click")
}

window.addEventListener('click', (evt) => {
    const navigationContent = document.querySelector("#navigationContent");
    const navigationButton = document.querySelector("#navigationButton");
    
    if (evt.target !== navigationButton && navigationContent.style.display === "block")
    {
         document.querySelector("#navigationContent").style = "display: none;";
         console.log("klick")
    }
   
})

const länkarna = [
    {destination: "home",                  länk: "#"},
    {destination: "rock, paper, scissors", länk: "../../pages/ssp.html"},
    {destination: "memory-game",           länk: "#"},
];

for (const link of länkarna) {
    document.querySelector("#länkarna").innerHTML += `
   <li>
    <a data-länk="${link.länk}" href="#">${link.destination}</a>
  </li>` 
}
//<li>${link.destination} länken här <span src="${link.länk}"></span></li>

document.querySelector('#navigationContent').addEventListener('click', (evt) => {
    if (evt.target.localName !== "a") return;
    evt.preventDefault();
    console.log(evt.target.dataset.link);
    changeContent(evt.target.dataset.link);
});
 
changeContent("../../pages/ssp.html");
 async function changeContent(länk) {
    const req = await fetch(`${länk}`)
    const content = await req.text();
    document.querySelector('#articleContent').innerHTML = content;
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
