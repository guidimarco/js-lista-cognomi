// <1-fold --- VERSION 1.0
// VAR ASSIGNMENT
var lastNameList = ["bianchi", "verdi", "rossi", "esposito", "conte", "antognoni"];
var usersLastName;
var usersLastNameIndex;

// 1 - ASK NAME AND PUSH INTO THE LIST
usersLastName = prompt("Inserisci il tuo cognome:").toLowerCase();
lastNameList.push(usersLastName);

// stamp
console.log("Cognome utente: " + usersLastName);

// 2 - SORT LAST-NAME-LIST ALPHABETICALLY
lastNameList.sort();

// 3 - EVALUATE THE INDEX
// #2-fold --- with for-cycle and indexControl VERS 1.0
// usersLastNameIndex = 0;
// // control var for evalute index
// var indexControl = true;
//
// for (var i = 0; i < lastNameList.length; i++) {
//     if (indexControl) {
//         usersLastNameIndex = usersLastNameIndex + 1;
//     }
//     if (usersLastName == lastNameList[i]) {
//         indexControl = false;
//     }
// }

// #/2-fold

// #2-fold --- with for-cycle and indexControl VERS 1.1
// usersLastNameIndex = 0;
// // control var for evalute index
// var indexControl = true;
//
// for (var i = 0; indexControl; i++) {
//     usersLastNameIndex = usersLastNameIndex + 1;
//     if (usersLastName == lastNameList[i]) {
//         indexControl = false;
//     }
// }

// #/2-fold

// #2-fold --- with for-cycle and indexControl VERS 1.2
// // control var for evalute index
// var indexControl = true;
//
// for (var usersLastNameIndex = 0; indexControl; usersLastNameIndex++) {
//     if (usersLastName == lastNameList[usersLastNameIndex]) {
//         indexControl = false;
//     }
// }

// #/2-fold

// #2-fold --- with .indexOf
usersLastNameIndex = lastNameList.indexOf(usersLastName) + 1;

// #/2-fold

// stamp - stamp HTML
console.log(lastNameList);
console.log("Il tuo cognome è il numero " + usersLastNameIndex + " della lista.");
document.getElementById("users-last-name-index").innerHTML = usersLastNameIndex;

// </1-fold
