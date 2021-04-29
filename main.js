const nombres = ["Alisa","Amanda","Ana G","Ana L", "Angie", "Clau", "Daniela R.", "Daniela T.", "Eliana", "Flo", "Gaby", "Leo", "Inga", "Pepi", "María Laura", "Marta", "Nicole", "Olga", "Yeraldin", "Ranju", "Rosangely", "Sonia", "Taiza", "Yasmín"
];
function voluntario(){
    let positionRandom = Math.floor(Math.random()*nombres.length);
    const randomItem = nombres[positionRandom];
    console.log(randomItem);
    document.body.innerHTML = (randomItem);

}

document.querySelector("button").addEventListener("click",voluntario);
//const content = element.innerHTML;


//console.log(voluntario());
//function myDelete() {
   // nombres.splice(positionRandom,1)//
//}
//console.log(nombres[4]);


//console.log(myDelete());

