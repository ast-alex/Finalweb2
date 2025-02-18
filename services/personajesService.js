const axios = require('axios');

const API_URL = 'https://hp-api.onrender.com/api/characters';

async function getPersonajes() {
    try{
        const response = await axios.get(API_URL);
        
        return response.data;
    } catch (error) {
        console.log('Error al obtener los personajes:', error.message || error);
        return [];
    }
}

module.exports = {getPersonajes}