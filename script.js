// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Default password length.
var endingLength = "";

// Arrays for every possible character that can be used in the password.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", ];

function generatePassword () {
  
  // All posible character choices are stored here.
  var userChoice = [];

  // variables to check the users parameters for a password.
  var includeLowerCase
  var includeUpperCase
  var includeNumbers
  var includeSpecialCharacters

  // parseInt converts the user input from a string to a number so an error is not displayed because of the NaN clause.
  var endingLength = parseInt(window.prompt("Please select a password length between 8 and 128 characters."));
  
    // If x < 8, x > 128 or if x is not a number, an error alter will display in the window and in the console.
    if (endingLength < 8 || endingLength > 128 || isNaN(endingLength)){
    alert("Error: Password must be a number between 8 and 128 characters.");
    console.log("Invalid password length")
    return "";
    }
  
    // If user inputs a valid character length, this message is logged.
    if (endingLength){
    console.log ( "This password will be " + endingLength + " characters long!");
    }

    // If user selects ok, the lowerCase array is added to the userChoice array. Then, a confirmation message is logged.
    if (includeLowerCase = confirm("Do you want to include lowercase letters?")){
      (userChoice = userChoice.concat(lowerCase))
    }
    console.log ("Includes Lowercase Letters?: " + includeLowerCase);

    // If user selects ok, the upperCase array is added to the userChoice array. Then, a confirmation message is logged.
    if (includeUpperCase = confirm("Do you want to include uppercase letters?")){
      (userChoice = userChoice.concat(upperCase))
    }
    console.log ("Includes Uppercase Letters?: " + includeUpperCase);

    // If user selects ok, the numbers array is added to the userChoice array. Then, a confirmation message is logged.
    if (includeNumbers = confirm("Do you want to include numbers?")){
      (userChoice = userChoice.concat(numbers))
    }
    console.log("Includes Numbers?: " + includeNumbers)

    // If user selects ok, the specialCharacters array is added to the userChoice array. Then, a confirmation message is logged.
     if (includeSpecialCharacters = confirm("Do you want to include special characters?")){
      (userChoice = userChoice.concat(specialCharacters))
    }
    console.log("Includes Special Characters?: " + includeSpecialCharacters)

    // Alerts user that they must select a character type
    if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters){
      alert("You must include at least 1 character type.")
      return "";
    }
    
    // This line fixes 2 bugs. #1 it makes sure that only the password is displayed and not the element type. #2 it erases the previously generated password when a new one is created.
    var password = ""; 
    // While i is less than the length of the password, a random value from the userChoice array will be selected and added to the password.
    for (var i = 0; i < endingLength; i++) {
      var random = Math.floor(Math.random() * userChoice.length);
      password = password + userChoice[random];
     }
   return password;  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
