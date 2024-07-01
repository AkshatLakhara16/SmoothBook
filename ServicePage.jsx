import React, { useState } from 'react';
import ClassCalendarBookingMenu from './ClassCalendarBookingMenu';
import CategorySection from './CategorySection';
import OptionsList from './OptionsList';

const ServicePage = () => {
  const [menuSteps, setMenuSteps] = useState([
    { name: 'Select Service', selected: true },
    { name: 'Select staff', selected: false },
    { name: 'Select date and time', selected: false },
    { name: 'Enter payment details', selected: false }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('Haircuts');

  const categoriesData = {
    "Haircuts": [
      { style: "Men's Haircut", price: 35.00, minutes: 45, moreInfo: "Experience a transformation with our precision-crafted men's haircuts, tailored to elevate your style." },
      { style: "Women's Haircut", price: 45.00, minutes: 45, moreInfo: "Experience a transformation with our precision-crafted women's haircuts, designed to enhance your look." },
      { style: "Men's Hair Treatment", price: 50.00, minutes: 45, moreInfo: "Indulge in our luxurious men's hair treatment, promoting healthy and stylish hair." },
      { style: "Women's Hair Treatment", price: 60.00, minutes: 45, moreInfo: "Revitalize your hair with our premium women's hair treatment, perfect for any occasion." }
    ],
    "Extras": [
      { style: "Hot Towel", price: 50.00, minutes: 45, moreInfo: "Relax with our soothing hot towel service, adding a touch of comfort to your grooming routine." },
      { style: "Shave/Trim", price: 60.00, minutes: 45, moreInfo: "Refine your look with our professional shave and trim service, ensuring a clean and polished appearance." },
      { style: "Hair Wash", price: 60.00, minutes: 45, moreInfo: "Enjoy a refreshing hair wash experience, leaving your hair clean, healthy, and rejuvenated." }
    ],
    "Category #3": [
      { style: "Manicure", price: 20.00, minutes: 30, moreInfo: "Pamper yourself with our expert manicure service, enhancing the appearance and health of your nails." },
      { style: "Pedicure", price: 30.00, minutes: 45, moreInfo: "Treat your feet to our relaxing pedicure service, ensuring soft and well-groomed feet." }
    ],
    "Category #4": [
      { style: "Men's Hair Treatment", price: 50.00, minutes: 45, moreInfo: "Indulge in our luxurious men's hair treatment, promoting healthy and stylish hair." },
      { style: "Women's Hair Treatment", price: 60.00, minutes: 45, moreInfo: "Revitalize your hair with our premium women's hair treatment, perfect for any occasion." }
    ],
    "Category #5": [
      { style: "Men's Hair Treatment", price: 50.00, minutes: 45, moreInfo: "Indulge in our luxurious men's hair treatment, promoting healthy and stylish hair." },
      { style: "Women's Hair Treatment", price: 60.00, minutes: 45, moreInfo: "Revitalize your hair with our premium women's hair treatment, perfect for any occasion." }
    ]
  };

  const categories = Object.keys(categoriesData);

  const getNextCategory = (currentCategory) => {
    const currentIndex = categories.indexOf(currentCategory);
    return currentIndex >= 0 && currentIndex < categories.length - 1
      ? categories[currentIndex + 1]
      : null;
  };

  return (
    <div className="h-full w-[85%] py-12 m-auto md:w-full   ">
      <div className="flex  w-[100%] md:w-[100%] lg:w-[70%] ">
        <div className="w-full hidden  lg:w-[45%] lg:block   xl:w-[45%] ">
          <ClassCalendarBookingMenu menuSteps={menuSteps} className="hidden md:block" />
        </div>
        <div className="w-full md:w-[75%] lg:w-[55%] flex flex-col font-inter m-auto" >
          <div className="text-xs md:text-sm text-[#808080] text-start">Step 1 of 4</div>
          <div className="text-start mt-2 text-[#000000] font-medium md:text-lg">Select Service(s)</div>
          <div className=" mt-2 md:mt-3 font-normal text-base leading-6">
            <p className="text-start text-[#4D4D4D] text-[10px] md:text-base">This is a quick description of the services that the business provides.</p>
          </div>
          <div className="mt-5  lg:mt-10 ">
            <CategorySection categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          </div>
          <div className="border-t border-[#DEDEDE] h-px"></div>
          <div className="transition-all duration-500 ease-in transform">
            <OptionsList services={categoriesData[selectedCategory]} textColor="#1252F7" categoryName={selectedCategory} />
            {getNextCategory(selectedCategory) && (
              <OptionsList services={categoriesData[getNextCategory(selectedCategory)]} textColor="#1252F7" categoryName={getNextCategory(selectedCategory)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
