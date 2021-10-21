let numberA = document.getElementById('numA');
let numberB = document.getElementById('numB');
let numberC = document.getElementById('numC');
let myBtn = document.getElementById('btn')
let myResult = document.getElementById('result');

myBtn.addEventListener('click', 
function () {
    let a = numberA.value
    let b = numberB.value
    let c = numberC.value

    let x1 = (-b + Math.sqrt(Math.pow (b, 2)-(4*a*c)))/(2*a)
    let x2 = (-b - Math.sqrt(Math.pow (b, 2)-(4*a*c)))/(2*a)
myResult.innerHTML= 'X1 is' + " " + x1 + " "+'X2 is'+ " " + x2;

}
)

