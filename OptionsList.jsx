import React, { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  '& .MuiSvgIcon-root': { fontSize: 20 },
  '&.Mui-checked': { color: '#3069FE' },
}));

const OptionsList = ({ services, textColor, categoryName }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleCheckboxChange = (itemStyle) => {
    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.includes(itemStyle)
        ? prevSelectedItems.filter(style => style !== itemStyle)
        : [...prevSelectedItems, itemStyle]
    );
  };

  const handleMoreInfoClick = (index) => {
    setExpandedItem(prevExpandedItem => (prevExpandedItem === index ? null : index));
  };

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  return (
    <div className='flex flex-col gap-3 md:gap-4 transition-all duration-500 ease-in-out transform'>
      <div className="text-[#1A1919] font-medium text-base text-start mt-5">{categoryName}</div>
      {services.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col gap-[0.6875rem] rounded-[0.3475rem] border p-[0.6945rem] shadow-[0px_0.216875rem_0.13rem_-0.086875rem_rgba(0,0,0,0.05)] 
            ${selectedItems.includes(item.style) ? 'border-[#3069FE]' : 'border-[#EDEDED]'} 
            hover-checkbox`}
        >
          <div className="flex gap-[0.6875rem]">
            <div className="checkbox-container">
              <CustomCheckbox
                id={`scales-${item.style}`}
                checked={selectedItems.includes(item.style)}
                onChange={() => handleCheckboxChange(item.style)}
                className="custom-checkbox"
              />
            </div>
            <div className="flex flex-col w-full gap-1">
              <div className="flex justify-between items-center">
                <div className={` flex font-medium text-[#1A1919] text-sm md:text-base`}>{item.style}</div>
                <div className='text-sm md:text-base'>${item.price.toFixed(2)}</div>
              </div>
              <div className={`text-[#1A1919] w-full text-start flex gap-2 text-xs md:text-sm`}>
                {item.minutes} minutes 
                <span className="flex items-center gap-1 ">
                  <span className="w-1 h-1 rounded-[100%] bg-black"></span>
                </span>
                <button className="text-[#3069FE] font-medium" onClick={() => handleMoreInfoClick(index)}>More info</button>
              </div>
              {expandedItem === index && (
                <div className="text-[#4D4D4D] font-normal  text-xs md:text-sm text-start">
                  {item.moreInfo}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OptionsList;
