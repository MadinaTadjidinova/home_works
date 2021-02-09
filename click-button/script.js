let h1 = document.createElement('h1');
h1.innerText = "0"
document.body.append(h1);

let ul = document.createElement('ul');
for (let i = 1; i <= 5; i++){
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.id = "buttons" + i;

    li.append(button);
    ul.append(li);
    button.style.backgroundColor = "pink"
}
document.body.append(ul);

//1
buttons1.innerText = "Random color";
buttons1.addEventListener('click', function(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    h1.style.color = "rgb("+r+","+g+","+b+")";
})


//2
let fontSize = 30;
buttons2.innerText = "+";
buttons2.addEventListener("click" , function(){
    h1.style.fontSize = ++fontSize +"px";
})
//3
buttons3.innerText = "-";
buttons3.addEventListener("click" , function(){
    h1.style.fontSize = --fontSize +"px";
})

//4
buttons4.innerText = "Plus";
let number = 0;
buttons4.addEventListener("click" , function(){
    h1.innerText = ++number;
})
//5
buttons5.innerText = "Minus";
buttons5.addEventListener("click" , function(){
    h1.innerText = --number;
}); 
