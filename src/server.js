const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');


const app = express();

mongoose.connect('mongodb+srv://alohadesign:alohadesign@cluster0-n9zht.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//temos os metódos : get (buscar info do backend), post (criar nova informação no backend)
// put (editar informação) delete (deletar info)
// req.query = acessar query params (para filtros)
// req.params para acessar route params (para edição, delete)

// 
app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(routes);
app.listen(3334);
