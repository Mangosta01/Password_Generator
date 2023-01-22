// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

var passwordlength;
var lowercase;
var uppercase;
var numeric;
var special;





function getPasswordOptions() {


  function passwordLength() {
    passwordlength = prompt("Please indicate password length");
    if (passwordlength >= 10 && passwordlength <= 64) {
      return passwordlength;
    }
    else {
      alert("Password must be between 10 and 64 characters");
      return passwordLength();
    }
  };


   function lowerCase() {
    lowercase = prompt("Do you want the password to contain lowercase characters? (yes/no)");
    if (lowercase == "yes" || lowercase == "no") {
      return lowercase;
    }
    else {
      alert("please answer yes or no");
      return prompt("Do you want the password to contain lowercase characters? (yes/no)")
    }
  };


function upperCase() {
    uppercase = prompt("Do you want the password to contain uppercase characters? (yes/no)");
    if (uppercase == "yes" || uppercase == "no") {
      return uppercase;
    }
    else {
      alert("please answer yes or no");
      return prompt("Do you want the password to contain uppercase characters? (yes/no)")
    }
  };


 function Numeric() {
    numeric = prompt("Do you want the password to contain numeric characters? (yes/no)");
    if (numeric == "yes" || numeric == "no") {
      return numeric;
    }
    else {
      alert("please answer yes or no");
      return prompt("Do you want the password to contain numeric characters? (yes/no)")
    }
  };



 function Special() {
    special = prompt("Do you want the password to contain special characters? (yes/no)");
    if (special == "yes" || special == "no") {
      return special;
    }
    else {
      alert("please answer yes or no");
      return prompt("Do you want the password to contain special characters? (yes/no)")
    }
  };

  function Validate(){
    if (lowercase == "no" && uppercase == "no" && numeric== "no" && special== "no") {
      alert("At least one character type should be selected");
      return getPasswordOptions() ;
    }
  }

  passwordLength();
  lowerCase();
  upperCase();
  Numeric();
  Special();
  Validate();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', getPasswordOptions);




// Function for getting a random element from an array

function getRandom(arr) {
  var randomElement = "";
  for (var i = 0; i < passwordlength; i++)
    randomElement += arr.join("").charAt(Math.floor(Math.random() * arr.length));
  return randomElement;
}

// Function to generate password with user input

function generatePassword() {
  var targetcharacters = [];
  var result;



  if (lowercase == "yes") {
    targetcharacters = targetcharacters.concat(lowerCasedCharacters);
  }

  if (uppercase == "yes") {
    targetcharacters = targetcharacters.concat(upperCasedCharacters);
  }
  if (numeric == "yes") {
    targetcharacters = targetcharacters.concat(numericCharacters);
  }

  if (special == "yes") {
    targetcharacters = targetcharacters.concat(specialCharacters);
  }

   result = getRandom(targetcharacters);

   return result;

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {

  var passwordText = document.querySelector('#password');
  var password = generatePassword();
  passwordText.value = password;
 
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


