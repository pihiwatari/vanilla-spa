//location.hash nos retrona el elemento (#/1), para que nos sea util, necesitamos parsear la informacion
const getHash = () => 
  //con slice, le pedimos eliminar #, toLocaleLowerCase pasamos todo a minusculas
  //con split, eliminamos las '/' y finalmente le pedimos que nos entregue el segundo
  //elemento del arreglo que contiene el numero identificador (1) en este caso
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

  export default getHash;