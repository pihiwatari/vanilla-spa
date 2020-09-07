const API = 'https://rickandmortyapi.com/api/character/';


const getData = async (id) => {
  //Si tenemos un id (numero de personaje), lo concatenamos con API, si no, regresamos API
  //para renderizar Home
  const apiURL = id ? `${API}${id}` : API;
  //hacemos fetch de los datos
  try {
    const response = await fetch(apiURL);
    //parseamos a JSON
    const data = await response.json();
    return data
  } catch (error) {
    //si tenemos un error lo imprimos en consola
    console.log('Fetch error', error);
  };
};

export default getData;