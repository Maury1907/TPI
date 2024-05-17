function activarAnimacion(event) {
    var icono = event.currentTarget.querySelector('.icono');
    icono.classList.add('animacion-salto');
  }
  
  function detenerAnimacion(event) {
    var icono = event.currentTarget.querySelector('.icono');
    icono.classList.remove('animacion-salto');
  }