document.getElementById('Saludo').addEventListener('click', function(e){
    e.stopPropagation();
    alert("Hola!");
});

document.getElementById('button').addEventListener('click', function(){
    alert("Hola! Soy el div")
});