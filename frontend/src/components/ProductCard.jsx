import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';

const ProductCard = ({ Product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>

      <div className='flex justify-start items-center gap-x-2'>
        <h2 className='my-1'>{Product.title}</h2>
      </div>

      <div className='flex justify-start items-center gap-x-2'>
        <h2 className='my-1'>{Product.price}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2'>
        <h2 className='my-1'>{Product.info}</h2>
      </div>

      <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
        <Link to={`/products/details/${Product._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
        <Link to={`/products/edit/${Product._id}`}>
          <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
        </Link>
        <Link to={`/products/delete/${Product._id}`}>
          <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
        </Link>
      </div>

    </div>
  );
};

export default ProductCard;