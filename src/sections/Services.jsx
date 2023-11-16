import React, { useEffect, useState } from 'react';
import styles, { layout } from '../assets/styles/style';
import { services } from '../constants';

const ServicesCard = ({ icon, title, index }) => {
  const backgroundColor = index % 2 === 0 ? '#fff' : '#2947A9';
  const textColor = index % 2 === 0 ? '#2947A9' : '#fff';
  return (
    <div
      className={`${
        index !== services.length - 1 ? 'mb-6' : 'mb-0'
      } services-card`}
      style={{ backgroundColor, color: textColor }}
    >
      <div className={`w-[80px] h-[80px] ${styles.flexCenter} `}>
        <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='services-card_divider'></div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className=' text-[20px] font-600 mb-1'>{title}</h4>
      </div>
    </div>
  );
};

const Services = () => {
  const [itemsPerRow, setItemsPerRow] = useState(getItemsPerRow);

  function getItemsPerRow() {
    if (window.innerWidth < 600) {
      return 1; // Set 1 item per row for small screens
    } else if (window.innerWidth < 950) {
      return 2; // Set 2 items per row for medium screens
    } else {
      return 3; // Set 3 items per row for large screens
    }
  }

  useEffect(() => {
    function handleResize() {
      setItemsPerRow(getItemsPerRow());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const rows = [];
  for (let i = 0; i < services.length; i += itemsPerRow) {
    const rowItems = services.slice(i, i + itemsPerRow);
    const row = (
      <div key={`row-${i}`} className={`flex gap-8 md:gap-16 lg:gap-20`}>
        {rowItems.map((service, index) => (
          <ServicesCard key={service.id} {...service} index={i + index} />
        ))}
      </div>
    );
    rows.push(row);
  }

  return (
    <section
      className={`flex flex-col items-center ${styles.flexCenter} bg-[#F6F8F7]`}
    >
      <div>
        <h2 className='font-700 text-[36px] text-center my-16'>Services</h2>
      </div>
      <div className='flex flex-col items-center'>{rows}</div>
    </section>
  );
};

export default Services;
