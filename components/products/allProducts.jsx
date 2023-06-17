import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const ProductListingPage = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      brand: 'Brand A',
      price: 10.99,
      discount: 2.5,
      image: 'https://instorestatic.tcl.com/media/catalog/product/p/6/p635.png',
      availability: true,
      rating: 4.5,
      size: 'Medium',
    },
    {
      id: 2,
      name: 'Product 2',
      brand: 'Brand B',
      price: 19.99,
      discount: 5,
      image: 'https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png',
      availability: false,
      rating: 3.8,
      size: 'Large',
    },
    {
      id: 3,
      name: 'Product 3',
      brand: 'Brand C',
      price: 15.49,
      discount: 3,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 4.2,
      size: 'Small',
    },
    {
      id: 4,
      name: 'Product 4',
      brand: 'Brand D',
      price: 12.99,
      discount: 2,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 4.7,
      size: 'Medium',
    },
    {
      id: 5,
      name: 'Product 5',
      brand: 'Brand E',
      price: 8.99,
      discount: 1.5,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 4.0,
      size: 'Small',
    },
    {
      id: 6,
      name: 'Product 6',
      brand: 'Brand F',
      price: 29.99,
      discount: 8,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 4.9,
      size: 'Large',
    },
    {
      id: 7,
      name: 'Product 7',
      brand: 'Brand G',
      price: 17.99,
      discount: 4.5,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 3.5,
      size: 'Medium',
    },
    {
      id: 8,
      name: 'Product 8',
      brand: 'Brand H',
      price: 14.49,
      discount: 3.2,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 4.1,
      size: 'Small',
    },
    {
      id: 9,
      name: 'Product 9',
      brand: 'Brand I',
      price: 9.99,
      discount: 1,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 3.7,
      size: 'Medium',
    },
    {
      id: 10,
      name: 'Product 10',
      brand: 'Brand J',
      price: 24.99,
      discount: 6,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 4.6,
      size: 'Large',
    },
    {
      id: 11,
      name: 'Product 11',
      brand: 'Brand K',
      price: 7.99,
      discount: 1.8,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 3.9,
      size: 'Small',
    },
    {
      id: 12,
      name: 'Product 12',
      brand: 'Brand L',
      price: 11.99,
      discount: 2.8,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 4.3,
      size: 'Medium',
    },
    {
      id: 13,
      name: 'Product 13',
      brand: 'Brand M',
      price: 13.99,
      discount: 3.5,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 4.4,
      size: 'Small',
    },
    {
      id: 14,
      name: 'Product 14',
      brand: 'Brand N',
      price: 19.99,
      discount: 5.5,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 4.8,
      size: 'Large',
    },
    {
      id: 15,
      name: 'Product 15',
      brand: 'Brand O',
      price: 16.99,
      discount: 4,
      image: 'https://picsum.photos/800/550?random',
      availability: true,
      rating: 3.6,
      size: 'Medium',
    },
  ];
  

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 flex-center text-center">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 rounded-lg"
            />
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.brand}</p>
            <div className="flex items-center mb-2">
              <p className="text-gray-800 font-bold">
                ${product.price - product.discount.toFixed(2)}
              </p>
              <p className="text-red-500 ml-2 line-through">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-red-500 ml-2">({product.discount.toFixed(1)}%)</p>
            </div>
            <p className="text-gray-600 mb-2">
              Availability:{' '}
              {product.availability ? (
                <FaCheck className="inline text-green-500" />
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </p>
            <p className="text-gray-600 mb-2">
              Ratings:{' '}
              {Array.from({ length: Math.floor(product.rating) }).map((_, index) => (
                <AiFillStar key={index} className="inline text-yellow-500" />
              ))}
            </p>
            <p className="text-gray-600 mb-2">Size: {product.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
