// Assignment Code 
var resultEl = document.getElementById('uppercase')
var lowercaseEl = document.getElementById('lowercase')
var numbersEl = document.getElementById('numbers')
var symbolsEl = document.getElementById('symbols')

var generateBtn = document.querySelector("#generate")
var randomFunc ={
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


// generate event listener
generateBtn.addEventListener('click', writePassword); {
  var length = generateBtn.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper= uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;

  generateBtn = generatePassword(hasLower, hasNumber, hasUpper, hasSymbol);
};

//generate password function
function generatePassword(lower, upper, number, symbol, lenght) {
  // init pw var
  let generatedPassword = '';

  var typesCount = lower + upper + number + symbol;

  var typesArr = [
    { lower },
    { upper },
    { number },
    { symbol }
  ].filter(item => Object.values(item)[0]
  );
  // filter out unchecked types
  // loop over length, call generator function for each type
  // add final pw to the pw var and return
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}[]<>/,.';
  return symbols [Math.floor(Math.random() * symbols.length)];
}

generateBtn = ("click", generatePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    
  passwordText = 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
