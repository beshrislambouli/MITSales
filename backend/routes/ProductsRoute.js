import express from 'express';
import { Product } from '../models/product.js';


const router = express.Router ();

// post a product
router.post ('/', 
    async (req, res) => {
        try {
            if ( !req.body.title || !req.body.price ) {
                return res.status (400). send ({
                    message: "Please fill all required fields"
                });
            }

            const newProduct = {
                title: req.body.title,
                price: req.body.price,
                info: req.body.info,
            }

            const product = await Product.create (newProduct);

            return res. status (201). send (product);
        } catch (err) {
            console.log (err.message);
            return res.status (500).send ({message: err.message});
        }
    }
);

// get all the products
router .get ('/', 
    async (req, res) => {
        try {
            const products = await Product. find ({});
            return res. status (200). json ({
                len: products.length,
                data: products
            });
        } catch (err) {
            console.log (err.message);
            return res.status (500).send ({message: err.message});
        }
    }
);

// get a product by id
router .get ('/:id', 
    async (req, res) => {
        try {
            const id = req.params.id;
            const product = await Product. findById (id);
            return res. status (200). json (product);
        } catch (err) {
            console.log (err.message);
            return res.status (500).send ({message: err.message});
        }
    }
);

// delete a product by id
router.delete ('/:id', 
    async (req, res) => {
        try {
            const id = req.params.id;
            const product = await Product. findByIdAndDelete (id);
            return res. status (200). send ({message: "Product Deleted "});
        } catch (err) {
            console.log (err.message);
            return res.status (500).send ({message: err.message});
        }
});

//modify a product by id
router .put ('/:id', 
    async (req, res) => {
        try {
            if ( !req.body.title || !req.body.price ) {
                return res.status (400). send ({
                    message: "Please fill all required fields"
                });
            }
            const id = req.params.id;
            const product = await Product.findByIdAndUpdate (id, req.body);
            return res. status (200). send ({message: "Product Updated"});
        } catch (err) {
            console.log (err.message);
            return res.status (500).send ({message: err.message});
        }
    }
);

export default router ;