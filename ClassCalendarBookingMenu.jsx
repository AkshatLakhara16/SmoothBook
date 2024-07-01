import React from 'react';

const ClassCalendarBookingMenu = ({ menuSteps }) => {
  return (
    <div className="class-calendar-booking-menu-section font-inter text-xs font-medium  text-[#4D4D4D] ">
      <div className="class-calendar-booking-menu max-w-[fit-content] flex flex-col gap-4 mx-auto">
        {menuSteps.map((item, index) => (
          <div
            key={index}
            className={`class-calendar-booking-menu-item  flex justify-start items-center gap-3 ${item.selected ? 'text-blue-500' : 'text-gray-700'}`}
          >
            {item.selected && (
                <>
                <span className="flex items-center gap-1 ">
                <span className="w-1.5 h-1.5 rounded-[100%] bg-blue-500"></span>

                </span>
                </>
            )}
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassCalendarBookingMenu;
