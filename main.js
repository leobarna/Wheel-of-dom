const nombres = ["Alisa","Amanda","Ana G","Ana L", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sonia", "Taiza", "Yasmín"
];

document.querySelector("button").addEventListener("click",voluntario);
let positionRandom = Math.floor(Math.random()*nombres.length);
function voluntario(){

    const randomItem = nombres[positionRandom];
    console.log(randomItem);

}
function myDelete() {
    nombres.splice(positionRandom,1)
}
//console.log(nombres[4]);

console.log(voluntario());
console.log(myDelete());

