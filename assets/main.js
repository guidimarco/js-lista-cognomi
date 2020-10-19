// <1-fold --- VERSION 1.0 ---
// VAR ASSIGNMENT
var lastNameList = ["Bianchi", "Verdi", "Rossi", "Esposito", "Conte"];
var usersLastName;
var usersLastNameIndex;

// ASK NAME AND PUSH INTO THE LIST
usersLastName = prompt("Inserisci il tuo cognome:");
lastNameList.push(usersLastName);

// CHECK
console.log("Cognome utente: " + usersLastName);

// SORT LAST-NAME-LIST ALPHABETICAL
lastNameList.sort();

// STAMP THE INDEX
usersLastNameIndex = lastNameList.indexOf(usersLastName) + 1;

// CHECK
console.log(lastNameList);
console.log("Il tuo cognome è il numero " + usersLastNameIndex + " della lista.");


// </1-fold
