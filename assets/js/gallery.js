/* Exempel på JS-fil för specifik sida (ssp-sidan i det här fallet) */

console.log('gallery.js init'); // För att se att skriptet laddats in

//lightbox script
//document.querySelector("#lightbox").style.display = "none"

document.querySelectorAll("#thumbnails img").forEach((elem) => {
    elem.addEventListener('click', () => openLightbox(elem))
});

function openLightbox(elem) {
    const bigPic = elem.dataset.bigpic;
    document.querySelector("#lightbox img").src = bigPic;
    document.querySelector('#lightbox').classList.add('show');
    console.log("click")
}

document.querySelector("#lightbox span").addEventListener('click', closeLightbox);

function closeLightbox() {
    document.querySelector("#lightbox").classList.remove('show');
};