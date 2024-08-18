import express, { response } from "express";
import {PORT, mongoDB} from "./config.js";
import mongoose from 'mongoose';
import ProductsRoute from "./routes/ProductsRoute.js";
import cors from 'cors';

const app = express ();

// Middleware: parsing req body
app.use (express.json());

//Middleware: cors policy
app.use (cors()); // TODO: make it more secure


// main page
app.get ("/", 
    (req, res) => {
        return res.status(234).send("MIT Sales");
    }
);

//products router
app.use ("/products", ProductsRoute);

mongoose. 
    connect (mongoDB)
    .then (
        () => {
            console.log ("Connected to DataBase");
            app.listen (PORT, 
                () => {
                console.log ("Start Listening");
            })
        }
    )
    .catch (
        (err) => {
            console.log (err);
        }
    ); 