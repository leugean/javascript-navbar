
let submenu = document.querySelector('.submenu');
let botonMenu = document.querySelector('.boton-menu'); 
let menu = document.querySelector('.menu');
let menuProducto = document.querySelector('.menuProducto'); 
let body = document.querySelector('body');

function mostrar(){
  document.getElementById('submenu').style.display = 'block';
  
}

function cerrar(){
  document.getElementById("submenu").style.display = 'none';
}

function mostrarMenu(){
    botonMenu.addEventListener('click', ()=>{
      menu.style.display = 'block';
      botonMenu.style.display = 'none';

      if (submenu.style.display = 'none'){
        menuProducto.addEventListener('click', () =>{
          submenu.style.display = 'block';
        });
      }
      else{
        submenu.style.display = 'none';
      }
    });
  
}









