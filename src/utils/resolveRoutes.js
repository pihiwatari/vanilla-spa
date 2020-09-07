//resolve routes se encarga de enviar la información (plantilla HTML) al lugar indiacdo dentro
//de nuestra aplicacion
const resolveRoutes = (route) => {
  //segun la API de Rick&Morty, hay menos de 1000 ids disponibles, por ende, necesitamos validar
  //que la ruta recibida no tenga mas de 3 digitos.
  if (route.length <= 3) {

    //si se cumple creamos una variable que sea igual a la ruta y validamos que esta ruta tenga un
    //id o sea la ruta hacia Home
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  } 
  //en caso de pedir 'about' cuya longitud es mayor a 3 digitos, retornamos un string con el formato
  //adecuado para la ruta y la ruta como tal.
  return `/${route}`;
};

export default resolveRoutes;