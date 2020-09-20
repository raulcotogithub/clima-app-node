const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { getLugarLatLng } = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.75, -73.9)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {

    try {
        const cords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(cords.lat, cords.lng);
        return `El clima de ${direccion} es de ${temp} grados centigrados `

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);