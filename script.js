// Assignment code here

// Default pasword length.
var endingLength = "";
// All posible character choices are stored here.
var userChoice = [];
// All possible characters catergorized for user selection.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*",];
var isLowerCase
var isUpperCase
var includesNumbers
var includesSpecialCharacters

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword () {
  var endingLength = parseInt(window.prompt("Please select a password length between 8 and 128 characters."));
  console.log (endingLength);
  if (endingLength < 8 || endingLength > 128 || isNaN(endingLength)){
    alert("Error: Password must be a number between 8 and 128 characters.");
    return "Error"
  }
  if (isLowerCase = confirm("Do you want to include lowercase letters?")){
    (userChoice = userChoice + lowerCase)
    console.log (isLowerCase);
  }
  if (isUpperCase = confirm("Do you want to include uppercase letters?")){
    (userChoice = userChoice + upperCase)
    console.log (isUpperCase);
  }
  if (includesNumbers = confirm("Do you want to include numbers?")){
    (userChoice = userChoice + numbers)
    console.log (includesNumbers);
  }
   if (includesSpecialCharacters = confirm("Do you want to include special characters?")){
    (userChoice = userChoice + specialCharacters)
    console.log (includesSpecialCharacters);
  }

  for (var i = 0; i < endingLength; i++) {
    var random

  }
}



function userSelection () {

}
 
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
