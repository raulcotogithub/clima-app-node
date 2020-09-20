const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUrl}.json?access_token=pk.eyJ1IjoicmF1bGNvdG9tYXBib3giLCJhIjoiY2tmYWU0NmpnMGhpczJ5cDdpYXd4eW45byJ9.sZ6Q3gZV-gwE_58NI9A0IA`,

    });

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }
    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lat = data.center[1];
    const lng = data.center[0];

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}