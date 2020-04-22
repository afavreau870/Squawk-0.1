'use strict';
var express = require('express');
var router = express.Router();
const sql = require("mssql");


/* GET home page. */
/* GET home page. */


    //Config for SQL Connection to airport_data DB
    const config = {
        user: 'sa',
        password: 'test123',
        server: 'DESKTOP\\SQLEXPRESS',
        database: 'airport_data',
        port: 1433
    };
    //SQL Connection
sql.connect(config, function (err) {
    var airports = [];
    //If error getting SQL connection log error
    if (err) console.log(err);

    //Create a new SQL request
    let sqlRequest = new sql.Request();

    //Query Table
    let sqlQuery = 'Select * From airports';
    sqlRequest.query(sqlQuery, function (err, data) {
        if (err) {
            console.log(err)
        }

        else {

            for (let i = 0; i < data.recordset.length; i++) {
                var airport = {
                    'name': data.recordset[i].name,
                    'icaio': data.recordset[i].icaio

                }

                airports.push(airport.name);
            }


            console.log('Connected to Database')
            /* console.log(data),
             console.table(data.recordset),
             console.log(data.rowsAffected),
             console.log(data.recordset[0])
           */

        }

        sql.close();
        console.log('SQL Connection Closed - COMPLETE')




        router.get('/', function (req, res, next) {
            res.render('index', {
                "show": 'Hello',
                "title": 'Squawk',
                "airports": airports,
                "airport": airport

            })

        })

    })
 }),


  


module.exports = router;
