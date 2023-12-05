/* Exempel på JS-fil för specifik sida (ssp-sidan i det här fallet) */

console.log('gallery.js init'); // För att se att skriptet laddats in

//lightbox script
//document.querySelector("#lightbox").style.display = "none"

document.querySelector("#articleContent").addEventListener('click', (evt) => {
    if (evt.target.localName == "img") {
        openLightbox(evt.target)
        console.log("opening lightbox")
    }
    else {
        closeLightbox();
    }

});

function openLightbox(elem) {
    const bigPic = elem.dataset.bigpic;
    document.querySelector("#lightbox img").src = bigPic;
    document.querySelector('#lightbox').style.display = "flex";
}

document.querySelector("#ligthbox").addEventListener('click', closeLightbox);

function closeLightbox() {
    document.querySelector("#lightbox").style.display = "none";
};