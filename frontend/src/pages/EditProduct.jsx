import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProducts = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams ();

  useEffect ( () => {
    setLoading (true);
    axios. get (`http://localhost:5555/products/${id}`)
        .then ( (response) => {
            setTitle (response.data.title);
            setPrice (response.data.price);
            setInfo (response.data.info);
            setLoading (false);
        }). catch ( (error) => {
            setLoading (false);
            alert ("Error, check the console");
            console.log (error);
        })
  }, []);
  const handleEditProduct = () => {
    const data = {
      title,
      price,
      info,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/products/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Product</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Price</label>
          <input
            type='text'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Info</label>
          <input
            type='text'
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleEditProduct}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditProducts