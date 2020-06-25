var imagenes = document.querySelectorAll('.gallery__img');
/* el selector querySelectorAll obtiene todos los elementos que tiene la clase galley__img*/
var modal = document.querySelector('#modal');
/* obtiene solo un elemento*/
var img = document.querySelector('#modal__img');

var boton = document.querySelector('#modal__boton');

/* recorrido para mostrar lo que esta en la gallery img*/
for (var i = 0; i< imagenes.length; i++){
    imagenes[i].addEventListener('click', function(e){

        modal.classList.toggle("modal--open");

        var src = e.target.src;
        img.setAttribute("src",src);
    });
}


boton.addEventListener('click', function(){

    modal.classList.toggle("modal--open");
});



































