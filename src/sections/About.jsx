import styles from '../assets/styles/style';
import { about } from '../assets';

const About = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingX} mb-20`}>
      <div className='flex flex-row'>
        <div>
          <img src={about} className='shadow-xl rounded' />
        </div>
        <div className='w-[30%]'></div>

        <div className='relative ml-10'>
          <div className='bg-[#2947A9] p-10 text-white absolute top-[30%] right-full w-[400px] md:w-[500px] lg:w-[488px] xl:w-[488px] shadow-2xl'>
            <h3 className='text-[36px] font-700'>About Us</h3>
            <div className='my-10'>
              <p className='text-white font-400 text-[20px]'>
                For more than 30 years we have been delivering world-class
                construction and we’ve built many lasting relationships along
                the way.
              </p>
              <br />
              <p className='text-white font-400 text-[20px]'>
                We’ve matured into an industry leader and trusted resource for
                those seeking quality, innovation and reliability when building
                in the U.S.
              </p>
            </div>
            <button className='bg-white text-primary p-4 rounded mt-10'>
              More on Our History
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
