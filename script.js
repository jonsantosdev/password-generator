// Variables

var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  ".",
  "-",
  "?",
  "<",
  ">",
];

var numericCharacters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

var lowerCaseCharacters = [ 
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

 function getPasswordOptions() {
   var length = prompt("How many characters would you like your password to contain?")
    if(length < 8) {
      alert("Password length needs to be 8 characters minimun")
    };
    if(length > 128) {
      alert("Password length must be less than 128 character")
    };
   var hasSpecialCharacters = confirm("Click OK to include special characters")
   var hasNumericCharacters = confirm("Click OK to include numeric characters")
   var hasLowerCaseCharacters = confirm("Click OK to include lower case characters")
   var hasUpperCaseCharacters = confirm("Click OK to include upper case characters")

   if(hasSpecialCharacters === false &&
      hasNumericCharacters === false &&
      hasLowerCaseCharacters === false &&
      hasUpperCaseCharacters === false
      )    
      alert("You need one of the following: special character, number, lowercase or uppercase letter");

   var passwordOptions = {
     length: length,
     hasSpecialCharacters: hasSpecialCharacters,
     hasNumericCharacters: hasNumericCharacters,
     hasLowerCaseCharacters: hasLowerCaseCharacters,
     hasUpperCaseCharacters: hasUpperCaseCharacters
   }  

   console.log(passwordOptions);
   return passwordOptions;

 }

// Function to randomize 
 function getRandom(arr) {
  
  var randomIndex = Math.floor(Math.random()* arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Function to generate password
function generatePassword() {

var options = getPasswordOptions();
var results = [];
var possibleCharacters = [];
var guaranteedCharacters = [];  

if(!options) return null;

if(options.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters)
  guaranteedCharacters.push(getRandom(specialCharacters));
}

if(options.hasNumericCharacters) {
  possibleCharacters = possibleCharacters.concat(numericCharacters)
  guaranteedCharacters.push(getRandom(numericCharacters));
}

if(options.hasLowerCaseCharacters) {
  possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
  guaranteedCharacters.push(getRandom(lowerCaseCharacters));
}

if(options.hasUpperCaseCharacters) {
  possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
  guaranteedCharacters.push(getRandom(upperCaseCharacters));
}

for(var index =0; index < options.length; index++) {
  var possibleCharacter = getRandom(possibleCharacters);

  results.push(possibleCharacter);
}

for(var index =0; index < guaranteedCharacters.length; index++) {
  results[index] = guaranteedCharacters[index];
}
// console.log(results.join(""));
return results.join("");

}

// getPasswordOptions();

// Write password to the #password input
 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
