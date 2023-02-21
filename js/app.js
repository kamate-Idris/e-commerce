// Recuperer les elements du DOM
const categorie = document.querySelector(".categorie")
const categorieList = document.querySelector(".categorieList")
const sliderImg = document.querySelector(".sliderImg")
const back = document.querySelector(".iconBack")
const next = document.querySelector(".iconNext")

const sliderImages = {
    "img1": '<img class="sliderImg" src="../assets/img/pc3.jpg" alt="">',
    "img2": '<img class="sliderImg" src=""../assets/img/pc2.jpg"" alt="">',
    "img3": '<img class="sliderImg" src="../assets/img/pcs.jpg" alt="">' ,
    "img4": '<img class="sliderImg" src="../assets/img/pc3.jpeg"alt="">' ,
}





//Afficher la liste des produits
categorie.addEventListener("click", () => {
    categorieList.classList.toggle("active")
    console.log(categorieList);
})

//Les carousel





