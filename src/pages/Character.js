//Importamos los módulos que utilizan los datos de la api para hacer peticiones.
import getHash from '../utils/getHash';
import getData from '../utils/getData';

//Despues actualizamos la funcion Character a async/await
const Character = async () => {
  //usando el hash le pasamos un id a esta plantilla
  const id =  getHash();
  //sacamos los datos del personaje de la función getData
  const character = await getData(id);

  //en view, ingresamos los datos dinámicos generados por 'character'
  const view = `
    <div class='Characters-inner'>
      <article class='Characters-card'>
        <img src='${character.image}' alt='${character.name}'>
        <h2>${character.name}</h2>
      </article>
      <article class='Characters-card'>
        <h3>Episodes: <span>${character.episode.length}</span></h3>
        <h3>Status: <span>${character.status}</span></h3>
        <h3>Species: <span>${character.species}</span></h3>
        <h3>Gender: <span>${character.gender}</span></h3>
        <h3>Origin: <span>${character.origin.name}</span></h3>
        <h3>Last location: <span>${character.location.name}</span></h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;