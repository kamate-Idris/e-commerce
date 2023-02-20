// Recuperer les elements du DOM
const categorie = document.querySelector(".categorie")
const categorieList = document.querySelector(".categorieList")



//Afficher la liste des produits
categorie.addEventListener("click", () => {
    categorieList.classList.toggle("active")
    console.log(categorieList);
})