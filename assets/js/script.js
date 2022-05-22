// Assignment code here
var characterLength = 8;
var choiceArray = [];

var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>', '?'];


// Get references to the #generate element
var generateBtnEl = document.querySelector("#generate");

// generate button event
generateBtnEl.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}


function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}


function getPrompts() {
  choiceArray = [];
  characterLength = parseInt(prompt("How many characters do you want your password to be? Choose between 8 and 128."));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number and/or between 8 and 128. Please enter a valid reponse.");
    return false;
  }
  if (confirm("Would you like to include lower case letters?")) {
    choiceArray = choiceArray.concat(lowerCaseArray);
  }
  if (confirm("Would you like to include upper case letters?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  if (confirm("Would you like to include numbers?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  if (confirm("Would you like to include special characters?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }
  return true;
}