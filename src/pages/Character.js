//creamos una constante (arrow function) con el nombre del archivo js.
const Character = () => {
  //generamos una plantilla html como constante
  const view = `
    <div class='characters-inner'>
      <article class='characters-card'>
        <img src='image' alt='name'>
        <h2>Name</h2>
      </article>
      <article class='characters-card'>
        <h3>Episodes:</h3>
        <h3>Status:</h3>
        <h3>Species:</h3>
        <h3>Gender:</h3>
        <h3>Origin:</h3>
        <h3>Last location:</h3>
      </article>
    </div>
  `;
  //retornamos la vista o plantilla de html
  return view;
};

//exportamos el componente.
export default Character;