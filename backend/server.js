import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import multer from 'multer';
import path from 'path';




const app = express();
app.use(cors());
app.use(cookieParser());

app.use(express.json());


const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"9978RAKesh$",
    database:"org"

});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname+ "_" + Date.now() + path.extname(file.originalname));

    }
});

const upload = multer({
    storage: storage
});


con.connect(function(err){
    if (err){
        console.log("Error in Connection",err);

    } else {
        console.log("CONNECTED");

    }
})

app.post("/create", upload.single('myimage'), (req, res) => {
    
    console.log(req.file);
    console.log(req.body.password);

    const sql = "Insert Into Employee (`_name`, `email`,`_password`, `address`, `image`) Values (?)";
    bcrypt.hash(req.body.password.toString(), 10, (err, hash) =>{
        if (err) {
            return res.json({Error:"Error in Hashing"});
        } 
        const values = [
            req.body.name,
            req.body.email,
            hash,
            req.body.address,
            req.file.filename
            

        ];
        
        con.query(sql, [values], (err, result) => {
            if (err) return res.json({Error: `Inside SQL Query ${err.message}` });

            return res.json({Status:"Success"});

        });
    })

    

    

})

app.post("/login", (req, res) => {
    const sql = "Select * from User Where email = ? AND _password = ?";
    // ? --> represents value will be available at run time 
    
    // in mssql it will be @Email for email;

    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({Status:"Error"});

        if (result.length > 0){
            return res.json({Status:"Succeess"});
        } else {
            return res.json({Status:"Error"});
        }
    });
});





app.listen(8080, () => {
    console.log("Running on port 8080");
});