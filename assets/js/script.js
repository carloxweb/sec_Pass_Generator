// Assignment code here

// Get references to the #generate element
var generatePassword = document.querySelector;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Please enter a number equal to or greater than 8 and less than 128");
  return;
}

//let includeNumbers = prompt('Include numbers: (yes/no)').toLocalLowerCase();
//let includeSymbol = prompt('Include symbols: (yes/no)').toLocalLowerCase();
//let includeLowcase = prompt('Include lowcase: (yes/no)').toLocalLowerCase();
//let includeUppercase = prompt('Include upcase: (yes/no)').toLocalLowerCase();

/*let passwordCharacters = '';
if(includeNumbers === 'yes') {
  passwordCharacters += numbers;
  console.log(passwordCharacters);

}
if(includeSymbols === 'yes') {
  passwordCharacters += symbols;
  console.log(passwordCharacters);

}
if(includeLowercase === 'yes') {
  passwordCharacters += lowcase;
  console.log(passwordCharacters);
}

if(includeLowercase === 'yes') {
  passwordCharacters += upcase;
  console.log(passwordCharacters);
}*/

if(passwordCharacters.length ===0) {
  alert('Please select type of character');
  console.log(passwordCharacters);
  return;
}