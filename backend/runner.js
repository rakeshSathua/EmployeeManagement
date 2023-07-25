import express from 'express';


import mssql from 'mssql';
import cors from 'cors';

import cookieParser from 'cookie-parser';


import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const app = express();
app.use(cors());
app.use(cookieParser());

app.use(express.json());



    // config for your database
    // var config = {
    //     user: 'sa',
    //     password: '9978RAKesh$',
    //     server: '16.0.1000.6', 
    //     database: 'ignite' 
    // };

    var config = {  
        user: 'sa',
        password: '9978RAKesh$',
        server: 'LAPTOP-6K862F60', 
        database: 'ignite',
        port: 1433,
        trustServerCertificate: true,

        pool:{
            max:100,
            min:0,
            idleTimeoutMillis: 30000,

        },
        options: {
            encrypt: true
        }
        
    }; 

    const pool = new mssql.ConnectionPool(config);


    // connect to your database
    pool.connect()
    .then(() => {
        console.log("Connected To SQL");

    }).catch((err) => {
        console.log("Error");

    })




app.post("/signup", (req, res) => {


    pool
    .query(`INSERT INTO Users (first_name, last_name, _password) VALUES ('James7','Bond7','lskdfjlkdj234');`)
    .then((result) => {
        console.log("Succesfull insert ");
        res.json({Status:"Success"});

    }).catch( (err) => {
        console.log("Error occured")
        res.json({Error:err});
    });
})


app.post("/signup2", (req, res) => {
    const {fname, lname, password} = req.body;
    console.log(req.body);

    console.log("firstnme type ", typeof fname);
    console.log("lastname type ", typeof lname);
    console.log("password type ", typeof password);
    

    pool
    .query(`INSERT INTO Users (first_name, last_name, _password) VALUES ('${fname}', '${lname}', '${password}');`)
    .then((result) => {
        console.log("Succesfull insert ");
        res.json({Status:"Success"});

    }).catch( (err) => {
        console.log("Error occured")
        res.json({Error:err});
    });
})

app.get("/getuser", (req, res) => {
    const {fname, lname, password} = req.body;
    console.log(req.body);

    
    

    pool
    .query(`SELECT * FROM USERS;`)
    .then((result) => {

        //console.log(result);
        console.table(result);


        res.json({user : result});

    }).catch( (err) => {
        console.log("Error occured")
        res.json({Error:err});
    });
})

app.listen(8080, () => {
    console.log("Running on port  runner 8080");
})