import styles, { layout } from '../assets/styles/style';
import { services } from '../constants';

const ServicesCard = ({ icon, title, index }) => {
  const backgroundColor = index % 2 === 0 ? 'white' : '#2d3e50';
  return (
    <div
      className={`${
        index !== services.length - 1 ? 'mb-6' : 'mb-0'
      } services-card`}
      style={{ backgroundColor }}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className={`${styles.flexCenter} bg-[#F6F8F7]`}>
      <div className={`${layout.sectionImg} flex-col`}>
        {services.map((service, index) => (
          <ServicesCard key={service.id} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
