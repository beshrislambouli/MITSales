import ProductCard from './ProductCard';

const ProductsTable = ({ Products }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {Products.map((item) => (
        <ProductCard key={item._id} Product={item} />
      ))}
    </div>
  );
};

export default ProductsTable;
