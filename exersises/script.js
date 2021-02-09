let input1 = document.querySelector('#password');
let p = document.querySelector('.p');

input1.addEventListener('input', function(event){
    if (input1.value.length == 0 ){
        div1.innerText = 'Введите пароль';
    }
    if (input1.value.length > 0 ){
        p.innerText = 'Слабо';
    }
    if (input1.value.length >= 5 ){
        p.innerText = 'Хорошо';
    }
})