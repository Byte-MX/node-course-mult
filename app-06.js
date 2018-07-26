// Lección 06: Ya con repositorio git para control de cambios.
// Require de la configuración de comandos
const argv = require('./config/yargs').argv; // Para no tener que accederlo como: argv.argv; ni a sus elementos como argv.argv.*
// Require de la biblioteca de colores (https://www.npmjs.com/package/colors)
const colors = require('colors');

// Require de las funciones creadas en multipicar/multiplicar3.js.
const { crearArchivo, listarTabla, listarTablaCurso } = require('./multiplicar/multiplicar-lib');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite)
            .catch(e => console.log(e));
        break;
    case 'listarc':
        listarTablaCurso(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            // Mi opción:
            .then(archivo => console.log('El archivo ' + 'tabla-'.green + base + ''.white + '.txt'.red + ' ha sido creado.'))
            // Opción del curso A (línea 2 de 3):
            //.then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            // Opción del curso B (línea 3 de 3): 
            //.then(archivo => console.log(`Archivo creado:`, colorsSafe.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('\nComando no reconocido. Teclee:\n\n\t node 05-app-yargs.js --help \n\npara lista de comandos disponibles.');
}