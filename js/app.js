// Recuperer les elements du DOM
const categorie = document.querySelector(".categorie")
const categorieList = document.querySelector(".categorieList")
const sliderImg = document.querySelectorAll(".sliderImg")
const back = document.querySelector(".iconBack")
const next = document.querySelector(".iconNext")




//Afficher la liste des produits
categorie.addEventListener("click", () => {
    categorieList.classList.toggle("active")
    console.log(categorieList);
})

//Les carousel
let currentSlide = 0;
function nextSlide() {
    sliderImg[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % sliderImg.length;
    sliderImg[currentSlide].classList.add('active');
}

setInterval(nextSlide, 2000);




//Manipulation du formulaire





