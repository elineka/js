let data = document.getElementById('numIn')
let myButton = document.getElementById('subBtn')

let myResult = document.getElementById('result')

myButton.addEventListener('click', function() {

let myData = data.value;

let flag = 1;
for(let i = 2; i<myData; i++) {
if(myData % i == 0) {
    flag = 0;
    break;
}

}
if(flag == 1) {
    myResult.innerHTML = myData + " " +"is prime"
}else {
    myResult.innerHTML = myData + " " + "is not prime"
}

})