const express = require('express');
const personajesRoutes = require('./routes/personajesRoutes');
const app = express();
const port = 8080;

//pug
app.set('view engine', 'pug');
app.set('views', './views');

//static files
app.use(express.static('public'));

//routes
app.use(personajesRoutes);


app.listen(port, () => console.log(`Listening on port ${port}`));