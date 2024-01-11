// Assignment code here

// Default pasword length.
var endingLength = "8";
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", ];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword () {
// All posible character choices are stored here.
var userChoice = [];
var includeLowerCase
var includeUpperCase
var includeNumbers
var includeSpecialCharacters
// parseInt converts the user input from a string to a number so an error is not displayed because of the NaN clause.
var endingLength = parseInt(window.prompt("Please select a password length between 8 and 128 characters."));
  console.log (endingLength);

  // If number is < 8 or > 128 or not a number, error alter will display.
  if (endingLength < 8 || endingLength > 128 || isNaN(endingLength)){
    alert("Error: Password must be a number between 8 and 128 characters.");
    return "";
  }
  // If user selects ok, the lowerCase array is added to the userChoice variable.
  if (includeLowerCase = confirm("Do you want to include lowercase letters?")){
    (userChoice = userChoice.concat(lowerCase))
  }
  // If user selects ok, the upperCase array is added to the userChoice variable.
  if (includeUpperCase = confirm("Do you want to include uppercase letters?")){
    (userChoice = userChoice.concat(upperCase))
  }
  // If user selects ok, the numbers array is added to the userChoice variable.
  if (includeNumbers = confirm("Do you want to include numbers?")){
    (userChoice = userChoice.concat(numbers))
  }
  // If user selects ok, the specialCharacters array is added to the userChoice variable.
   if (includeSpecialCharacters = confirm("Do you want to include special characters?")){
    (userChoice = userChoice.concat(specialCharacters))
  }
  // Alerts user that they must select a character type
  if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters){
    alert("You must include at least 1 character type.")
    return "";
  }

  // While i is less than the length of the password, a random value from the userChoice array will be selected and added to the password.
  for (var i = 0; i < endingLength; i++) {
    var random = Math.floor(Math.random() * userChoice.length);
    password = password + userChoice[random];
   }
 return password;  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  
