let data = document.getElementById('numInput')
let myButton = document.getElementById('submitBtn')

let myResult = document.getElementById('result')

myButton.addEventListener('click', function() {

let myData = data.value;
if (myData > 0) {
    myResult.innerHTML = myData + " "+"is a positive number."
}else 
if(myData < 0){
    myResult.innerHTML = myData + " "+"is a negative number."
} else {
    myResult.innerHTML = myData + " "+"is zero."
}


})