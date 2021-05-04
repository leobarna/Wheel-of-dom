const nombres = ["Alisa", "Amanda", "Ana G", "Ana L", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sonia", "Taiza", "Yasmín"];

function voluntario() {
    let positionRandom = Math.floor(Math.random() * nombres.length);
    const randomItem = nombres[positionRandom];
    console.log(randomItem);
    nombres.splice(positionRandom, 1);
    const padre = document.getElementById("lista").getElementsByTagName("ul")[0];
    const hijo = padre.getElementsByTagName("li")[positionRandom];
    padre.removeChild(hijo);

    let elegida = document.getElementById("candidata");
    elegida.innerHTML = randomItem;

    if (nombres.length === 0) {
        elegida.innerHTML = "Carga la página de nuevo";
    }
}

function recarga() {
    window.open("index.html", "_top");
}
document.getElementById("inicio").addEventListener("click", voluntario);
document.getElementById("reinicio").addEventListener("click", recarga);
