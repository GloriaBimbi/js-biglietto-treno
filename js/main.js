// - STEP 1: chiedo all'utente: "Quanti chilometri vuoi percorrere?"
const tripLenght = prompt("Quanti chilometri vuoi percorrere?", 127);
const tripLenghtCheck = parseInt(tripLenght);
console.log("Chilometri da percorrere: " + tripLenghtCheck);

// - STEP 2: chiedo all'utente: "Quanti anni hai?"
const userAge = prompt("Quanti anni hai?", 23);
const userAgeCheck = parseInt(userAge);
console.log("Età dell'utente: " + userAgeCheck);

//controllo che i dati inseiti dall'utente siano validi
if (!isNaN(tripLenght) && !isNaN(userAge)) {
  // - STEP 3: calcolo il prezzo del biglietto in base ai km percorsi
  let lenghtPrize = tripLenghtCheck * 0.21;
  let lenghtPrizeFixed = lenghtPrize.toFixed(2);

  console.log(
    "Prezzo del viaggio sulla base del chilometraggio scelto: " +
      lenghtPrizeFixed
  );

  // - STEP 4: applico al prezzo ottenuto un eventuale sconto per l'età dell'utente
  let finalPrize = 0;
  let finalPrizeFixed = 0;

  if (userAge < 18) {
    finalPrize = lenghtPrize * 0.8;
    finalPrizeFixed = finalPrize.toFixed(2);
    console.log("Il prezzo viene scontato a: " + finalPrizeFixed);
  } else if (userAge >= 65) {
    finalPrize = lenghtPrize * 0.6;
    finalPrizeFixed = finalPrize.toFixed(2);
    console.log("Il prezzo viene scontato a: " + finalPrizeFixed);
  } else {
    finalPrize = lenghtPrize;
    finalPrizeFixed = finalPrize.toFixed(2);
    console.log("Il prezzo rimane invariato a: " + finalPrizeFixed);
  }

  // - STEP 5: stampo il prezzo del biglietto
  document.getElementById("finalPrize").innerText = finalPrizeFixed;
} else {
  alert("I DATI INSERITI NON SONO CORRETTI. Ricarica la pagina.");
}
