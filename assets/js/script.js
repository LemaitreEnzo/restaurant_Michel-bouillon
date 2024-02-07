// AJOUT D'UN CAROUSEL SUR LA SECTION CARTE

let image = document.querySelector(".carIMG img");
let button = document.querySelector(".button");
let button2 = document.querySelector(".button2");
let container_image = document.querySelector(".imgCarouss");

let number = 1

button.addEventListener("click", () => {

    image.style.opacity = 0.7;

    setTimeout(() => {
        image.src = "assets/img/food_" + number + "_dark.jpg";
        if (number == 11) {
            number = 1
        }

        image.style.opacity = 1;
        number++

    }, 200)
})

button2.addEventListener("click", () => {

    image.style.opacity = 0.7;

    setTimeout(() => {

        image.src = "assets/img/food_" + number + "_dark.jpg";
        if (number == 1) {
            number = 11
        }

        image.style.opacity = 1;
        number--

    }, 200)

})

// AJOUT D'UN ALERT SUR LA RESERVATION

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservationForm");
    const submitBtn = document.getElementById("submit");

    form.addEventListener("input", function () {
        const inputs = form.querySelectorAll("input[required]");
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
            }
        });

        if (valid) {
            submitBtn.removeAttribute("disabled");
        } else {
            submitBtn.setAttribute("disabled", "disabled");
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const inputs = form.querySelectorAll("input[required]");
        let allFieldsFilled = true;

        inputs.forEach(input => {
            if (!input.value) {
                allFieldsFilled = false;
            }
        });

        if (allFieldsFilled) {
            alert("Formulaire soumis avec succès !");
            form.reset();
            submitBtn.setAttribute("disabled", "disabled");
        } else {
            alert("Veuillez remplir tous les champs obligatoires !");
        }
    });
});


var avis = document.querySelector("#temoignages h4")

avis.addEventListener("click", function () {
    avis = window.prompt("Laissez-nous votre avis !")
    confirmer = confirm("Envoyer ?");
}

)













