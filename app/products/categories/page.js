'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const categories = [
  'Electronics',
  'Clothing',
  'Home Decor',
  'Beauty',
  'Sports & Outdoors',
  'Books',
  'Toys & Games',
  'Health & Wellness',
  'Furniture',
  'Automotive',
  'Jewelry',
  'Pet Supplies',
  'Kitchen Appliances',
  'Baby & Kids',
  'Tools & Hardware',
  'Office Supplies',
  'Garden & Outdoor',
  'Musical Instruments',
  'Food & Beverages',
  'Fitness Equipment',
];

const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`bg-gray-200 text-gray-800 p-4 rounded-md shadow cursor-pointer ${
              selectedCategory === category ? 'bg-gray-300' : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            <Link href={`/categories/${category}`}>
              <span>{category}</span>
            </Link>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Selected Category: {selectedCategory}</h2>
          {/* Render content related to the selected category */}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
