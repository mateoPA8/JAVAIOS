function verificarEdad(genero, nombre,edad) {
    if ( edad > 30 && genero=="masculino")
    {
        return "hola senor" + nombre;
    }
    else
    {
        return "hola joven"+ nombre;
    }
    if ( edad > 30 && genero=="femenino")
    {
        return "hola senora" + nombre;
    }
    else
    {
        return "hola jovensita"+ nombre;
    }
  }
  
  export default verificarEdad;