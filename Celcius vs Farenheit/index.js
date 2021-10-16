//Take Farenheit convert it to Centigrade
const takeName = document.getElementById('numBtn');
takeName.addEventListener('click', function() {
    const f = document.getElementById('number').value;
    const toCelsius = (5/9) * (f-32);
    document.getElementById('answer').innerHTML =  "Celcius is" + " " + toCelsius 

})
//Take Centigrade convert it to Fahrenheit
const takeNameC = document.getElementById('numBtnC');
takeNameC.addEventListener('click', function() {
    const c = document.getElementById('numberC').value;
    const fahrenheit = ((9/5 * c) +32);
    document.getElementById('answerC').innerHTML =  "Fahrenheit is" + " " + fahrenheit 

})