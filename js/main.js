// - STEP 1: chiedo all'utente: "Quanti chilometri vuoi percorrere?"
const tripLenght = prompt("Quanti chilometri vuoi percorrere?", 127);
console.log("Chilometri da percorrere: " + tripLenght);

// - STEP 2: chiedo all'utente: "Quanti anni hai?"
const userAge = prompt("Quanti anni hai?", 23);
console.log("Età dell'utente: " + userAge);

// - STEP 3: calcolo il prezzo del biglietto in base ai km percorsi
let lenghtPrize = tripLenght * 0.21;
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
