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
        document.querySelector("#username-output").innerText = `Sir ${firstLetter}. ${lname}!`;
        const username = "Sir " + firstLetter + ". " + lname;
        alert(`Välkommen ${username}`);
        loggedIn = true;
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
        document.querySelector("#username-output").innerText = `Madam  ${firstLetter}. ${lname}!`;
        const username = "Madam " + firstLetter + ". " + lname;
        alert(`Välkommen ${username}`);
        loggedIn = true;
    }
}

//ålder och pengar

function check(){
const age = document.querySelector("#age").value;
let money = document.querySelector("#money").value;
localStorage.setItem("B", money);
if(age<18)
{
    document.querySelector("#age-error").innerText = `Too Young To Play, Please Exist Webpage. `
}
else
{
    document.querySelector("#age-error").innerText = ``
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

    selectDayElement.value = currentDay.getDay().toString();

    let selectedDay = selectDayElement.value;

    document.querySelector("#selectDay").addEventListener("change", function (event) {
        selectedDay = event.target.value;
        websiteStatus(selectedDay);
    });

    function websiteStatus(selectedDay) {
        console.log(selectedDay)
        const weekDay = parseInt(selectedDay);
        const daysOpen = [1, 2, 3, 4, 5];

        const openWebsite = daysOpen.includes(weekDay);

        if (openWebsite) {
            alert("website is open");
            document.querySelector("#site").style = "display: block;"
        } else {
            let untilOpen = 0;

            if (currentDay.getDay() === 6) {
                untilOpen = 1;
            } else if (currentDay.getDay() === 0) {
                untilOpen = 2;
            }

            currentDay.setDate(currentDay.getDate() - currentDay.getDay() + parseInt(selectedDay));
            let monday = new Date();
            monday.setDate(currentDay.getDate() + untilOpen);
            monday.setHours(0, 0, 0, 0);
            const timer = monday - currentDay;

            console.log(monday, currentDay, timer)

            const hours = Math.floor(timer / (1000 * 60 * 60));
            const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timer % (1000 * 60)) / 1000);

            alert("website is closed " + hours + ":" + minutes + ":" + seconds);
            document.querySelector("#site").style = "display: none;"
        }
    }

    websiteStatus(selectedDay);
});



function openNav() {
    document.querySelector("#navigationContent").style = "display: block;";
}

window.addEventListener('click', (evt) => {
    const navigationContent = document.querySelector("#navigationContent");
    const navigationButton = document.querySelector("#navigationButton");

    if (evt.target !== navigationButton && navigationContent.style.display === "block") {
        setTimeout(() => {
            document.querySelector("#navigationContent").style = "display: none;";
            console.log("klick")
        }, 50);
    }

})

const länkarna = [
    { destination: "Home", länk: "../pages/home.html" },
    { destination: "Rock, paper, scissors", länk: "../pages/ssp.html" },
    { destination: "Memory-game", länk: "../pages/memory.html" },
    { destination: "Gallery", länk: "../pages/gallery.html" },
    { destination: "Logout", länk: "../pages/login.html" }
];

for (const link of länkarna) {
    document.querySelector("#länkarna").innerHTML += `
   <li>
    <a data-länk="${link.länk}" >${link.destination}</a>
  </li>`
}


    document.querySelector('#navigationContent').addEventListener('click', (evt) => {
        if (evt.target.localName !== "a") return;
        console.log(evt.target.dataset.länk);
        changeContent(evt.target.dataset.länk);
        console.log("click")
    });


changeContent("../pages/login.html");
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



