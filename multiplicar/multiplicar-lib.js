// Lección 06: Ya con repositorio git para control de cambios.
// Require de un proyecto existente (biblioteca de Node):
const fs = require('fs'); // Require de FileSystem (https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_file_system)
// Require de la biblioteca de colores (https://www.npmjs.com/package/colors)
const colors = require('colors');
/*
 * Crear archivo de texto con la tabla de multiplicar correspondiente.
 */
let crearArchivo = (base, limite = 10) => { //ECMAScript6 ya permite poner valor por defecto (10). De todos modos yargs lo maneja en este caso, pero es útil si copio esto a otro desarrollo sin yargs.

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido como base (${base}) no es un número válido.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido como límite (${limite}) no es un número válido.`);
            return;
        }

        let data = '\nTabla del ' + base + ':\n\n';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile('tablas/tabla-' + base + '.txt', data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
};
/*
 * Listar tabla según el curso: 
 */
let listarTablaCurso = (base, limite = 10) => { //ECMAScript6 ya permite poner valor por defecto (10). De todos modos yargs lo maneja en este caso, pero es útil si copio esto a otro desarrollo sin yargs.
    console.log('\n==============================================='.yellow);
    console.log(`\t Tabla del ${base}:`.blue);
    console.log("===============================================\n\n".red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}
module.exports = {
    crearArchivo, // En ECMAScript6. Antes era crearArchivo:crearArchivo
    listarTablaCurso
};
/*
 * Forma 2: listarTabla creado por mí como tarea antes de la sugerencia del curso.
 * Si uso la forma 1, tendría que poner hasta el final de todo el module.exports y meter todas las funciones ahí;
 * de lo contrario, solo saldrá el último module.exports con su contenido. Con la forma 2, se agrega
 * al module.exports ya existente pero los demás programadores no ven cuándo lo agregué.
 */
module.exports.listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido como base (${base}) no es un número válido.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido como límite (${limite}) no es un número válido.`);
            return;
        }
        let data = '\n===============================================';
        data += '\n\tTabla del ' + base + ':';
        data += '\n===============================================\n\n';
        for (let i = 1; i <= limite; i++) {
            data += `\t${base} * ${i} = ${base * i}\n`;
        }
        console.log(data.cyan);
    });
};