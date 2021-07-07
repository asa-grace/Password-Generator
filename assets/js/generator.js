function generatePassword() {
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '?'];
  var randomChar = [];

  passwordLength = prompt("How long would you like your password to be? (must be between 8 and 128)"); 
  if (passwordLength < 8 || passwordLength > 128 || passwordLength === "null" || passwordLength === "") {
  return "not within the accepted parameters!";
  } 
  upperCase = confirm("would you like your password to contain upper case letters?");
  lowerCase = confirm("Would you like your password to contain lower case letters?");
  number = confirm("Would you like your password to contain numbers?");
  symbol = confirm("Would you like your password to contain symbols?");

  if (upperCase === confirm) {
    randomChar = [...randomChar, ...upperCase];
  }

  if (lowerCase === confirm) {
    randomChar = [...randomChar, ...lowerCase];
  }

  if (number === confirm) {
    randomChar = [...randomChar, ...number];
  }

  if (symbol === confirm) {
    randomChar = [...randomChar, ...symbol];
  }
  // Generate Password
  var passwordGenerator = "";
  for (let i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * randomChar.length);
    passwordGenerator = passwordGenerator + randomChar[randomPassword];
  }
  return passwordGenerator;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);