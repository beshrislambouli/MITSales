import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import ProductsTable from '../components/ProductsTable';


const Home = () => {
    const [products, setProducts] = useState ([]);
    const [loading, setLoading] = useState (false);

    useEffect(() => {
        setLoading(true);
        axios
          .get('http://localhost:5555/products')
          .then((res) => {
            setProducts(res.data.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      }, []);

      
    return (
        <div className='p-4'>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Products</h1>

                <Link to='/products/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>

            </div>

            {loading ? ( <Spinner /> ) : ( <ProductsTable Products={products}/> ) }
        </div>
    )
}

export default Home