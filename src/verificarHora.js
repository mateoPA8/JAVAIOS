function verificarHora(nombre) {
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    if(horaActual>12 && horaActual<19)
    {
       return "buenas tardes" + nombre;
    }
    if(horaActual<12 && horaActual>24)
    {
        return  "buenos dias" + nombre;
    }
    if(horaActual>19 && horaActual<24)
    {
        return "buenas noches" + nombre;
    }

  }
  
  export default verificarHora;