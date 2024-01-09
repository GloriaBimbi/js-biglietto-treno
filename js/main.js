// - STEP 1: chiedo all'utente: "Quanti chilometri vuoi percorrere?"
const tripLenght = prompt("Quanti chilometri vuoi percorrere?", 127);
const tripLenghtCheck = parseInt(tripLenght);
console.log("Chilometri da percorrere: " + tripLenghtCheck);

// - STEP 2: chiedo all'utente: "Quanti anni hai?"
const userAge = prompt("Quanti anni hai?", 23);
const userAgeCheck = parseInt(userAge);
console.log("Età dell'utente: " + userAgeCheck);

// - STEP 3: calcolo il prezzo del biglietto in base ai km percorsi
let lenghtPrize = tripLenghtCheck * 0.21;
console.log(
  "Prezzo del viaggio sulla base del chilometraggio scelto: " + lenghtPrize
);

// - STEP 4: applico al prezzo ottenuto un eventuale sconto per l'età dell'utente
let finalPrize = 0;

if (userAge < 18) {
  finalPrize = lenghtPrize * 0.8;
  console.log("Il prezzo viene scontato a: " + finalPrize);
} else if (userAge >= 65) {
  finalPrize = lenghtPrize * 0.6;
  console.log("Il prezzo viene scontato a: " + finalPrize);
} else {
  finalPrize = lenghtPrize;
  console.log("Il prezzo rimane invariato a: " + finalPrize);
}

// - STEP 5: stampo il prezzo del biglietto
document.getElementById("finalPrize").innerText = finalPrize;
