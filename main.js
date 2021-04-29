const nombres = ["Alisa","Amanda","Ana G","Ana L", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sonia", "Taiza", "Yasmín"
];

document.querySelector("button").addEventListener("click",voluntario);

function voluntario(){
    const randomItem = nombres[Math.floor(Math.random()*nombres.length)];
    console.log(randomItem);

}

//console.log(nombres[4]);

console.log(voluntario());

