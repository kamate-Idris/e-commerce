const formConnexion = document.querySelector(".form.connexion")
const formRegister = document.querySelector(".form.register")
const error = document.querySelector(".error")
const user = JSON.parse(localStorage.getItem("user"))

//Creation d'un compte(Mise des donnees dans le localStorage)
formRegister?.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(formRegister)
    localStorage.setItem("us", JSON.stringify({
        "nom": formData.get("nom"),
         "email": formData.get("email"), 
        "password": formData.get("password"), 
        "confirmePasse": formData.get("confirmePasse")
    }))
    location.href = "/"


})


//Connexion et sa validation
const email = user.email
const password = user.password
formConnexion?.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(formConnexion)
    if (email !== formData.get("email") || password !== formData.get("password")) {
        error.classList.add("active")
    } else {
        console.log("Work");
    }
})




