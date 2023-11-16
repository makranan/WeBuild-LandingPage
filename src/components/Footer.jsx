import styles from '../assets/styles/style';

const Footer = () => {
  return (
    <section
      className={`${styles.boxWidth} w-full flex py-6 justify-between items-center navbar max-h-[70px]`}
    >
      <div className='w-full flex py-6 justify-between items-center  xl:mx-[112px] mx-[60px]'>
        <p className='text-[16px] font-300 text-white'>
          WeBuild Company © 2022. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
