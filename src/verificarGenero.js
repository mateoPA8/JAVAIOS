function verificarGenero(genero, nombre) {
    if ( genero == "masculino")
    {
        return "hola senor" + nombre;
    }
    else
    {
        return "hola senora"+ nombre;
    }
  }
  
  export default verificarGenero;