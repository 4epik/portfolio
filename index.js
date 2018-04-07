'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const jade = require('jade');
const config = require('./config.json');
const mongoose = require('./mongoose');
const bodyParser =  require('body-parser');
const app = express();

app.set('view engine', 'jade');
app.set('view', path.resolve('./${config.http.publicRoot'}/markups/_pages));

app.use(express.static(path.resolve(config.http.publicRoot)));
app.use(bodyParser.json());


//-------

app.use('./admin', require('./routes/admin/about'));
//-------
app.get('/', (req,res) => {
    res.setHeader('Content-type', 'text/html;charset=utf8');
    res.end('работает!');
})

//-------


app.use((req, res, next) => res.status(404).send('Не удается найти страницу!'));

app.use((err, req, res, next) => {
    res.status(500);
    res.render('error', {error: err.massage});
    console.error(err.massage, err,stack);
});

app.listen(config.http.port, config.http.host, () =>{
    let uploadDir = path.resolve(config.http.publicRoot, 'upload');

    if (!fs.existsSync(uploadDir)){
        fs.mkdirSync(uploadDir);
    }

    console.log(`Server is up on ${config.http.host}:${config.http.port}!`);
})
