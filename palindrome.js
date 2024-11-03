// Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

let sentence=prompt("Enter a word or sentence");

let sentenceLowerCase=sentence.toLowerCase();
let sentenceLessPunctuacionSpaces=sentenceLowerCase.replace(/[^a-z0-9]/g, '');
// console.log(sinEspaciosPunctuation);
let sentenceArray=sentenceLessPunctuacionSpaces.split("");
let sentenceReverse=sentenceArray.reverse();
let sentenceCadena=sentenceReverse.join("");
// console.log(cadena);

if(sentenceLessPunctuacionSpaces == sentenceCadena){
    console.log("palindrome")
}else{
    console.log("Not palindrome")
}