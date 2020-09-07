//Importamos la funcion de getData
import getData from '../utils/getData';

//Como estamos haciendo peticion a una api, necesitamos actualizar la función de render del
//home a async/await
const Home = async () => {
  //hacemos petición fetch de los datos de la API, esto nos va a retornar un objeto con los datos
  //de los personajes
  const characters = await getData();

  //actualizamos view, para que imprima una plantilla HTML dinámica con los datos de cada personaje.
  //usamos mapa para retornar una plantilla con cada id dentro del objeto recibido en characters
  const view = `
    <div class= "Characters">
      ${characters.results.map(character => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
          </a>
        </article>
      `).join('')}
    </div>
  `;

  return view;
};

export default Home;