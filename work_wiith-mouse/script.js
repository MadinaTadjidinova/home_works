let div = document.createElement('div')
document.body.addEventListener('dblclick', function(event){
    div.style.left = event.clientX - 30 + "px"
    div.style.top = event.clientY - 30 + "px"
}) 

