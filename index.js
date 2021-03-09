const express = require('express');
const mysqlConfig = require('./config/mysql.config')

const playerRoute = require('./routes/player');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// MYSQL CONNECTION 
require('./config/mysql.config');


app.get('/', (req, res, next) => {
    res.status(200).json({ request: 'Success to local home route' });
});
app.use('/players', playerRoute);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running on: ' + PORT));