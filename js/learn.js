console.info(0);

function sayWelcome() {
  console.info("Salut " + prenume + ", bine ai venit la noi!");
}

var nume = "Stamate";
var prenume = "Valentiu";
var owner = "Valentiu's";
var msg1 = 'Ai zis "Nick?"';
var msg2 = 'Nu am zis "Nicolae"';
var template = `Test cu "ghilimele" sau 'simple'`;

console.debug("auzi..? dar cum te cheama? .." + prenume);
sayWelcome();

var skills = [`html`, `css`, `js`];

prenume = " Nick";

console.info("toate variabilele au fost initializate");
console.log(nume);
console.debug("cum te cheama? -" + prenume);

sayWelcome();

//schimb valutar

var cursEUR = 4.7;
var myEUR = 20;
var myRON = 0;
var friendEUR = 20;
var friendRON = 0;
//operatori sunt [* / + - ]

myRON = myRON * 4.7;
console.info("eu am " + myRON + " RON ");

friendRON = friendEUR * 4.7;
console.info("tu ai " + friendRON + " RON ");
