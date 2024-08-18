import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import DeleteProduct from './pages/DeleteProduct';
import EditProduct from './pages/EditProduct';
import ShowProduct from './pages/ShowProduct';


const App = () => {
  return (
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/products/create' element ={<CreateProduct />} />
      <Route path='/products/details/:id' element ={<ShowProduct />} />
      <Route path='/products/edit/:id' element ={<EditProduct />} />
      <Route path='/products/delete/:id' element ={<DeleteProduct />} />
    </Routes>
  )
}

export default App