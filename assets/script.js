var characterlength = 8;
var choiceofcharacter = [];

var specialcharacter = ['?', '!','@','#','$','%','&','*',];
var lowercasecharacter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercasecharacter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];               
var characternumber = ['1','2','3','4','5','6','7','8','9','0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
 var correctprompts= getprompts(); //either true or false
 var passwordText = document.querySelector("#password");

 if (correctprompts){ 
  var newPassword = generatePassword();
  passwordText.value = newPassword;
} else {
  passwordText.value="";
}

}
function generatePassword() {
  //generate password based on prompts selected
  var randompassword = "";
  var password="";
  console.log(characterlength)
for(var i = 0; i < characterlength; i++) {
    var randompassword = Math.floor(Math.random()* choiceofcharacter.length);
   password = password + choiceofcharacter[randompassword];
}
 return password;
}

function getprompts(){
  choiceofcharacter= [];
  
  characterlength = parseInt(prompt("how many characters does the password have to have? (8 - 128 characters")); //NAN

if(isNaN(characterlength) || characterlength < 8 || characterlength > 128) { //false statement
alert("characterlength has to be a number, between 8 - 128 digits. please try again.");
 return false;
}
if (confirm ("would you like to include uppercase characters")) {
      choiceofcharacter = choiceofcharacter.concat(uppercasecharacter);
}
      if (confirm("would you like to include lowercase characters")) {
            choiceofcharacter = choiceofcharacter.concat(lowercasecharacter);
      }
      if(confirm ("would you like to include special characters")) {
           choiceofcharacter = choiceofcharacter.concat(specialcharacter);
      }
      if (confirm("would you like to add numbers")) {
         choiceofcharacter = choiceofcharacter.concat(characternumber);
      }
      return true;
      }