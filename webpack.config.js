//Nos permite acceder a la dirección de las carpetas. Local o en la nube.
const path = require("path");
//Este plugin trabaja con los archivos HTML para exportar la plantilla de lo creado en js.
const HTMLWebpackPlugin = require('html-webpack-plugin');
//instalamos el plugin de copy-webpack-plugin en terminal y lo requerimos aqui
const CopyWebpackPlugin = require('copy-webpack-plugin');
//???
const { resolve } = require("path");

//es el código configurador para webpack, donde se encuentra la fuente, hacia donde exporta,
//y las condiciones que tiene que cumplir para que funcione.
module.exports = {
  //Ubicación del código fuente
  entry: './src/index.js',

  //Objeto configurador de los archivos de salida. Código de producción.
  output: {
    //Ubicación de salida.
    path: path.resolve(__dirname, "dist"),
    //Nombre del archivo de salida.
    filename: 'main.js'
  },
  //Objeto para trabajar las extensiones de los archivos.
  resolve: {
    //Pasamos un arreglo con todas las extensiones que webpack va a procesar
    extensions: ['.js'],
  },
  //Objeto confirgurador para las reglas de trabajo de babel.
  module: {
    //Pasamos una lista de objetos con las configuraciones para babel.
    rules: [
      {
        //test le dice a babel que condiciones deben tener los archivos con los que va a trabajar,
        //para eso utiliza una expresión regular (Regex)
        test: /\.js?$/, 
        //Todo lo que no queremos que procese babel.
        exclude: /node_modules/,
        //Objeto configurador para indicarle a babel que vamos a usar, para procesar los archivos
        use: {
          //Instalamos previamente el babel loader y lo requerimos a traves de node.
          loader: 'babel-loader',
        }
      }
    ]
  },
  //Creamos una nueva instancia de los plugins que vamos a necesitar.
  plugins: [
    //instanciamos el plugin de HTML incluyendo un objeto configurador, no un arreglo
    new HTMLWebpackPlugin(
      {
        //Injectamos el codigo de js a la plantilla de HTML
        inject: true,
        //Le indicamos donde se encuentra la plantilla de HTML
        template: './public/index.html',
        //Indicamos la ubicación donde guardaermos y el nombre del archivo de HTML.
        filename: './index.html',
      }
    ),
    //instanciamos un nuevo plugin de copiado OJO- REVISAR LA DOCUMENTACION
    //PARA EVITAR ERRORES AL COMPILAR
    new CopyWebpackPlugin({
      patterns: [{
        from: './src/styles/styles.css',
        to: ''
      }]
    })
  ]
}