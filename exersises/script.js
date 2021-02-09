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
let p2 = document.querySelector('.p2')


    p2 = Math.random();
    button = Math.random();

button.addEventListener('click', function(event){
    p2.innerText = button;
})


let input2 = document.querySelector('#number');
let button = document.querySelector('button');