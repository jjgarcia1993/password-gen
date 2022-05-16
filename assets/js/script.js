// Assignment code here



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var result = document.querySelector("card-header");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword(14, false);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




writePassword();