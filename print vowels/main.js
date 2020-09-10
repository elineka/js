//store a reference to the results paragraphs in our HTML
let messageV = document.getElementById('textar');
let myButton = document.getElementById('btn');

let myVowel = document.getElementById('vowel');

myButton.addEventListener('click', 

function () {
 //get message from user
    let message = messageV.value;
    
    let vowels = ['a', 'e', 'i', 'o', 'u']
    //loop through user message
     for (yourVowel of message) {
      //compare user and the vowels
if(yourVowel == vowels[0] ||yourVowel == vowels[1] ||yourVowel == vowels[2]||yourVowel == vowels[3]||yourVowel == vowels[4]
    ) {
   
var node = document.createElement('LI');
myVowel.appendChild(node);
node.textContent = yourVowel;

}

    }
}
)