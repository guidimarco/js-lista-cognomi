// <1-fold --- VERSION 1.0 ---
// VAR ASSIGNMENT
var lastNameList = ["bianchi", "verdi", "rossi", "esposito", "conte", "antognoni"];
var usersLastName;
var usersLastNameIndex;

// ASK NAME AND PUSH INTO THE LIST
usersLastName = prompt("Inserisci il tuo cognome:").toLowerCase();
lastNameList.push(usersLastName);

// CHECK
console.log("Cognome utente: " + usersLastName);

// SORT LAST-NAME-LIST ALPHABETICAL
lastNameList.sort();

// STAMP THE INDEX
usersLastNameIndex = lastNameList.indexOf(usersLastName) + 1;

// CHECK - STAMP - STAMP HTML
console.log(lastNameList);
console.log("Il tuo cognome è il numero " + usersLastNameIndex + " della lista.");
document.getElementById("users-last-name-index").innerHTML = usersLastNameIndex;

// </1-fold
