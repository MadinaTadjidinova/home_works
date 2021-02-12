let div = document.querySelector('div')
document.body.addEventListener('mousedown', function(event){
    div.style.left = event.clientX - 30 + "px"
    div.style.top = event.clientY - 30 + "px"
}) 

