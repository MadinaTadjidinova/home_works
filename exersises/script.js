//1
let inp1 = document.querySelector('#password');
let p = document.querySelector('.p');

inp1.addEventListener('input', function(event){
    if (inp1.value.length == 0 ){
        p.innerText = 'Введите пароль';
    }
    else if (inp1.value.length > 0 ){
        p.innerText = 'Слабо';
    }
     if (inp1.value.length >= 6 ){
        p.innerText = 'Хорошо'; 
    }
     if (inp1.value.length >= 8 ){
        p.innerText = 'Очень хорошо';
     }
})
 
//2
let input2 = document.querySelector('#number');
let button = document.querySelector('#button');
let p2 = document.querySelector('#p2');

let dice = Math.floor(Math.random () * 6) + 1;
button.addEventListener('click', function(event){


    if (input2 == dice){
    p2.innerText = 'Вы победили! Случаеное число это ' + dice;;
}
    else if (input2 != dice){
    p2.innerText = 'Вы проиграли! Случаеное число это ' + dice;
}
button.style.backgroundColor = "red"
})

//3
let input3 = document.querySelector("#number1");
let input4 = document.querySelector("#number2");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");

btn2.addEventListener('click', function(){
    let plus = input3.value + input4.value
    p4.innerText = plus;
    btn2.style.backgroundColor = "red"
})

btn3.addEventListener('click', function(){
    let minus = input3.value - input4.value
    p4.innerText = minus;
    btn3.style.backgroundColor = "green"
})

btn4.addEventListener('click', function(){
    let multiply = input3.value * input4.value
    p4.innerText = multiply;
    btn4.style.backgroundColor = "skyblue"
})

btn5.addEventListener('click', function(){
    let split = input3.value / input4.value
    p4.innerText = split;
    btn5.style.backgroundColor = "pink"
})

btn6.addEventListener('click', function(){
    let square = input3.value ** input4.value
    p4.innerText = square;
    btn6.style.backgroundColor = "yellow"
})