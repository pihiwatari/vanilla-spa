import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
  '/': Home,
  //este formato permite el manejo de información dinámica - 'id' es el parametro que cambiará según
  //lo recibamos de la API.
  '/:id': Character,
  '/:contact': 'Contact',
}

//Generamos una función asincrona que funciona como ruteador y nos envia la información
//de los componentes.
const router = async () => {
  //pasamos el valor de 'null', si es que no se encuentre el contenido
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  //le decimos al header en HTML que ejecute la funcion Header e imprima el contenido dentro de si mismo.
  header.innerHTML = await Header();
  //Lo mismo suscede con content.
  content.innerHTML = await render();
}

export default router;
