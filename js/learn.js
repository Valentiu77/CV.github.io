function learnVariables() {
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
}
// learnVariables ();

//schimb valutar
var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 100;
var friendRON = 0;
//operatori sunt [* / + - ]

myRON = myEUR * cursEUR;
console.info("eu am " + myRON + " RON ");

friendRON = friendEUR * cursEUR - (friendEUR * cursEUR * 1) / 100;
console.info("tu ai " + friendRON + " RON ");

var ATMFunds = 50000;
var funds = 5000;

function getExtractFee(amount) {
  var comision = amount * 0.01;
  if (comision < 2.5) {
    console.warn("comision minim de aplica");
    comision = 2.5;
  }
  return comision;
}
//TODO implement
function checkExtractPermission() {
  return true;
}

function extractFromATM(amount) {
  console.info(`= = = =  = = = = =  = = = = =  = = = = `);
  console.info(`suma extrasa este:` + amount);
  var comision = getExtractFee(amount);

  var totalExtract = amount + comision;

  if (totalExtract > funds) {
    console.error("insufficeint funds");
    return;
  }
  if (ATMFunds < totalExtract) {
    console.error("insufficent funds");
    return;
  }

  funds = funds - totalExtract;
  ATMFunds -= amount;
  console.info(`comision aplicat:` + comision);
  console.info("sold curent: " + funds);
  console.info(`= = = =  = = = = =  = = = = =  = = = = `);
}

extractFromATM(1005); // nu e multiplu de zece
extractFromATM(100000); //solduri insuficiente
extractFromATM(3000);
extractFromATM(3000);
extractFromATM(100);
extractFromATM(0); //

// // Sa facem alt extras, cati bani am,
// daca sold insuficeint, cat mai multe if-uri, sa faca calul pas cu pas
