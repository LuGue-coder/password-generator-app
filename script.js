const characterLengthRange=document.getElementById("character_length_range");
const characterLengthNumber= document.getElementById("character_length_number");
const form = document.getElementById("passwordGeneratorForm");
const includeUppercaseElement= document.getElementById("includeUppercase");
const includeLowercaseElement= document.getElementById("includeLowercase");
const includeNumbersElement= document.getElementById("includeNumbers");
const includeSymbolsElement= document.getElementById("includeSymbols");
var passwordDisplay= document.getElementById("passwordDisplay");


characterLengthRange.addEventListener("input", syncCharacterAmmount);
characterLengthNumber.addEventListener("input", syncCharacterAmmount);


var LOWERCASE_CHAR_CODES= arrayFromLowtoHigh(97,122);
var UPPERCASE_CHAR_CODES= arrayFromLowtoHigh(65,90);
var NUMBER_CHAR_CODES= arrayFromLowtoHigh(48,57);
var SYMBOL_CHAR_CODES= arrayFromLowtoHigh(33,47).concat(
    arrayFromLowtoHigh(58,64)
).concat(
    arrayFromLowtoHigh(91,96)
).concat(
    arrayFromLowtoHigh(123,126)
);

characterLengthRange.addEventListener("mousemove",function(){
    var x = (characterLengthRange.value) *5;
    var color = `linear-gradient(to right, hsl(127, 100%, 82%) ${x}%, hsl(248, 15%, 11%) ${x}%)`;
    characterLengthRange.style.background = color;
})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const characterAmmount= characterLengthNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeLowercase = includeLowercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked

    const password = generatePassword(characterAmmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
    passwordDisplay.innerText= password;
})

const copyBtn = document.querySelector(".password_copy");

copyBtn.addEventListener("click", () => {
  const password = passwordDisplay.innerText;
  if (!password) return;

  navigator.clipboard.writeText(password).then(() => {
    alert("Password copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
});

function generatePassword(characterAmmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    let charCodes = [];
    
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);

    let passwordCharacters = [];
    for (let i = 0; i < characterAmmount; i++) {
        let characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join('');
}


function arrayFromLowtoHigh (low, high){
    const array=[];
    for (i= low; i <= high; i++ ){
        array.push(i)
    }

    return array;
}

function syncCharacterAmmount(e){
    const value = e.target.value
characterLengthRange.value = value
characterLengthNumber.value = value
}


