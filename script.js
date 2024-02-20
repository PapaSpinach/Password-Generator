// Assignment code here
function generatePassword() {
  var lowercasecharacters = 'abcdefghijklmnopqrstuvwxyz';
  var uppercasecharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var specialcharacters = '~!@#$%^&*()_-+=[]{};":<>?.,';
  var passwordlength = Number(prompt("choose a length of at least 8 characters and no more than 128 characters"));
  if (isNaN(passwordlength)) {
    alert('Please enter a valid number');
    return ""
  }
  var shouldincludelowercasecharacters = confirm("do you want to include lowercase characters?");
  var shouldincludeuppercasecharacters = confirm("do you want to include uppercase characters?");
  var shouldincludenumbers = confirm("do you want to include numbers?");
  var shouldincludespecialcharacters = confirm("do you want to include special characters?");
  var characters = ""
  if (shouldincludelowercasecharacters) {
    characters = characters + lowercasecharacters;
  }
  if (shouldincludeuppercasecharacters) {
    characters = characters + uppercasecharacters;
  }
  if (shouldincludenumbers) {
    characters = characters + numbers
  }
  if (shouldincludespecialcharacters) {
    characters = characters + specialcharacters;
  }
  var password = ""
  for (let index = 0; index < Number(passwordlength); index++) {
    let x = Math.random() * characters.length;
    let rounded = Math.floor(x)
    let char = characters.charAt(rounded);
    password = password + char;
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
