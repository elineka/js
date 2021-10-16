//store a reference to the results paragraphs in our HTML
let messageV = document.getElementById('textar');
let myButton = document.getElementById('btn');

let myVowel = document.getElementById('vowel');
let myConsonants = document.getElementById('consonants');

myButton.addEventListener('click', 

function () {
 //get message from user
    let message = messageV.value;
    
    const vowels= message.match(/[aeiouAEIOU]/gi);
    const consonants= message.match(/[^aeiouAEIOU]/gi);

    myVowel.innerHTML= "Vowels are" +" "+vowels
    myConsonants.innerHTML="Consonants are" +" "+consonants
}
)