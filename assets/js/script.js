// Assignment code here

var pwSpecs = {
  lowercaseChar: "abcdefghijklmnopqrstuvwxyz",
  uppercaseChar: "ABCDEFGHIJKLMNOPQRSTUZWXYZ",
  numericalChar: "0123456789",
  specialChar: "!#$%&'()*+-./:;<=>?@[\^_`{|}~",
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


