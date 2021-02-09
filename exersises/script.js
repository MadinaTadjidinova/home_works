//1
let input1 = document.querySelector('#password');
let p = document.querySelector('.p');

input1.addEventListener('input', function(event){
    if (input1.value.length == 0 ){
        p.innerText = 'Введите пароль';
    }
    else if (input1.value.length > 0 ){
        p.innerText = 'Слабо';
    }
     if (input1.value.length >= 6 ){
        p.innerText = 'Хорошо'; 
    }
     if (input1.value.length >= 8 ){
        p.innerText = 'Очень хорошо';
     }
})
 
//2
let input2 = document.querySelector('#number');
let button = document.querySelector('button');
let p2 = document.querySelector('.p2');
let dice = Math.floor
(Math.random () * 6) + 1;

input2.addEventListener('input', function(event){
    if (input2 == dice){
    p2.innerText = 'Правильно';
}
    else if (input2 != dice){
    p2.innerText = 'Не правильно'
}
})