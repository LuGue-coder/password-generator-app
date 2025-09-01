const characterLengthRange=document.getElementById("character_length_range");
const characterLengthNumber= document.getElementById("character_length_number");
const form = document.getElementById("passwordGeneratorForm");
const includeUppercaseElement= document.getElementById("includeUppercase");
const includeLowercaseElement= document.getElementById("includeLowercase");
const includeNumbersElement= document.getElementById("includeNumbers");
const includeSymbolsElement= document.getElementById("includeSymbols");

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



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const characterAmmount= characterLengthNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeLowercase = includeLowercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked

    const password = generatePassword(characterAmmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
});

function generatePassword(characterAmmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols){
    console.log(LOWERCASE_CHAR_CODES);}



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


