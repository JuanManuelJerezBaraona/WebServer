const express = require('express');
const hbs = require('hbs');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 8080;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan Jerez',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Juan Jerez',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Juan Jerez',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.send('404 | Page not found');
});

app.listen(8080, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});