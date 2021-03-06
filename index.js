const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
//instancia de express en mi app
const app = express();
app.use(cors());

//middleware morgan para detectar peticiones
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//primera ruta
// app.get('/', (req, res) => {
//     res.send('hola mundo!!!');
// });

app.use('/api', apiRouter);

app.set('PORT', process.env.PORT || 3000);

app.listen(app.get('PORT'),() => {
    console.log('server up');
});


