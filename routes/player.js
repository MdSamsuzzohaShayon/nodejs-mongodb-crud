const express = require('express');
const { pool } = require('../config/mysql.config');
const router = express.Router();



router.get('/', (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connected as ID" + connection.threadId);


        connection.query(' SELECT * from players', (err, rows) => {
            connection.release(); // RETURN THE CONNECTIION TO THE POOL
            if (!err) {
                res.status(200).json({ rows });
            } else {
                console.log(err);
            }
        });
    });
    // res.status(200).json({ request: 'Success' });
});




router.get('/:id', (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connected as ID" + connection.threadId);


        connection.query(' SELECT * from players WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release(); // RETURN THE CONNECTIION TO THE POOL
            if (!err) {
                res.status(200).json({ rows });
            } else {
                console.log(err);
            }
        });
    });
    // res.status(200).json({ request: 'Success' });
});



router.delete('/:id', (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connected as ID" + connection.threadId);

        connection.query('DELETE from players WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release(); // RETURN THE CONNECTIION TO THE POOL
            if (!err) {
                res.status(200).json({ rows });
            } else {
                console.log(err);
            }
        });
    });
    // res.status(200).json({ request: 'Success' });
});



router.post('/', (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connected as ID" + connection.threadId);


        const players = req.body;

        connection.query(' INSERT INTO players SET ? ', players, (err, rows) => {
            connection.release(); // RETURN THE CONNECTIION TO THE POOL
            if (!err) {
                res.status(201).json({ rows });
            } else {
                console.log(err);
            }
        });



    });
    const { name, club } = req.body;
    console.log(" Name :" + name, " Club :" + club);
    // res.status(200).json({ request: 'Success' });
});






router.put('/:id', (req, res, next) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("Connected as ID" + connection.threadId);


        const id = req.params.id;
        const { name, club } = req.body;
        console.log("ID: ", id);
        console.log("Name: " + name);
        console.log("Club: " + club);

        connection.query('UPDATE players SET name=?, club=? WHERE id=? ', [name, club, id], (err, rows) => {
            connection.release(); // RETURN THE CONNECTIION TO THE POOL
            if (!err) {
                res.status(201).json({ rows });
            } else {
                console.log(err);
            }
        });



    });
    const { name, club } = req.body;
    console.log(" Name :" + name, " Club :" + club);
    // res.status(200).json({ request: 'Success' });
});







module.exports = router;