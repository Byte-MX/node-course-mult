const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

//Require de yargs.
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar indicada', opts)
    .command('listarc', 'Imprime en consola la tabla de multiplicar indicada a la manera del curso', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar indicada', opts)
    .help()
    .argv;

// Lo agregamos al módulo para accederlo desde fuera:
module.exports = {
    argv
};