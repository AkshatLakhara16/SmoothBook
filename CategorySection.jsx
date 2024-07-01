import React from 'react';

const CategorySection = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className='flex  justify-between gap[2px] '>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(category)}
          className={`md:px-4 md:py-2 md:pb-5  pb-3 text-[10px] lg:text-base md:text-base font-medium ${
            selectedCategory === category
              ? 'text-[#1252F7] border-[#1252F7] border-b-2 '
              : 'text-[#4D4D4D] border-transparent'
          } `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySection;
