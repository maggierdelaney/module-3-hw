// Variables containing all possible password options based on desired character set
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "{", "|", "}"];
// Empty array where user choices will be stored
var emptyArray = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Calls generated password string, writes password to the #password input, will display in box on page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Calls created password array from passwordOptions function, turns it into a string
function generatePassword() {
  var newpass = passwordOptions();
  console.log(newpass);
  return newpass.join("");
}

function passwordOptions() {
  //Presents a box in the browser to request user options, will be where the selection is stored Y = true and N = false
  var length = prompt("Enter the number of characters you would like your password to contain between 8-128")
  if (length < 8 || length > 128 || isNaN(length) === true)
    prompt("Please enter a valid number between 8 and 128.")

  var userLowerChoice = confirm("Do you want the password to contain lower case?")

  var userUpperChoice = confirm("Do you want the password to contain upper case?")

  var userNumberChoice = confirm("Do you want the password to include a number?")

  var userSpecialChoice = confirm("Do you want the password to contain special characters?")

  if (userLowerChoice === false &&
    userUpperChoice === false &&
    userNumberChoice === false &&
    userSpecialChoice === false) {
    alert("Please select at least one character set for the password")
    return null
    //return null will go back to main page, requires the user to select at least 1 character set
  }

  var passwordOptions = {
    length: length,
    lowercase: userLowerChoice,
    uppercase: userUpperChoice,
    number: userNumberChoice,
    special: userSpecialChoice,
  }

  //pushes the selected user charactet sets into the empty array
  if (userLowerChoice) {
    emptyArray = emptyArray.concat(lowercase);
  }
  if (userUpperChoice) {
    emptyArray = emptyArray.concat(uppercase);
  }
  if (userNumberChoice) {
    emptyArray = emptyArray.concat(number);
  }
  if (userSpecialChoice) {
    emptyArray = emptyArray.concat(special);
  }
  
  //creates another array where random characters will be pulled into from the empty array of user choices
  //the while loop will only run as long as the amount of characters is not equal to the selected length
  //index variable is created to randomize the empty array for the desired length of the password, and then pushes it into the temporary array
  var temporaryArray = []
  while (temporaryArray.length != length) {
    var index = Math.floor(Math.random() * emptyArray.length);
    temporaryArray.push(emptyArray[index]);
  }
  //will return the temporary array containing the randomized password back up to generatePassword function
  return temporaryArray;

}


generateBtn.addEventListener("click", writePassword);
