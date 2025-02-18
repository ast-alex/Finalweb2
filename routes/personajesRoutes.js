const express = require('express');
const router = express.Router();
const personajesService = require('../services/personajesService');

/// Ruta para obtener los personajes y renderizarlos
router.get('/', async (req, res) => {
  try {
    let personajes = await personajesService.getPersonajes();

    //verificacion de que existan personajes
    if (!personajes || personajes.length === 0) {
        return res.status(404).send('No se encontraron personajes');
    }

    //filter por raza
    if (req.query.species) {
        personajes = personajes.filter(p => p.species.toLowerCase() === req.query.species.toLowerCase());
    }

    //filter por genero
    if (req.query.gender) {
        personajes = personajes.filter(p => p.gender.toLowerCase() === req.query.gender.toLowerCase());
    }

    res.render('index', { personajes });
  } catch (error) {
    console.log('Error al obtener los personajes:', error);
    res.status(500).send('Error al obtener personajes');
  }
});

module.exports = router;
