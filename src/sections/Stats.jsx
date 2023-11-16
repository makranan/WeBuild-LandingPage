// import styles from '../assets/styles/style';
import { statsImg1, statsImg2, statsImg3, statsImg4 } from '../assets';

const Stats = () => {
  return (
    <section className={` px-[200px] h-[800px] `}>
      <div className='flex flex-col md:flex-row items-center gap-20'>
        <div className='relative mb-6 md:mb-0 min-w-[70%]'>
          {/* CARD */}
          <div className='absolute right-[120px] top-[-120px] p-6 md:p-8 lg:p-10 rounded shadow-xl bg-white z-[1] max-w-xs'>
            <img
              src={statsImg1}
              className='absolute top-[-20px] right-[-30px] h-[97px] w-[97px]'
            />
            <h2 className='text-6xl md:text-6xl lg:text-7xl font-bold'>84</h2>
            <div className='flex items-center min-w-[240px] ml-4'>
              <div className='stats-card_divider h-8'></div>
              <h3 className='text-[24px] font-400 text-[#667299] ml-4'>
                Happy Clients
              </h3>
            </div>
          </div>

          {/* CARD */}
          <div className='absolute p-6 md:p-8 lg:p-10 rounded shadow-xl bg-white z-[0] max-w-sm'>
            <img
              src={statsImg2}
              className='absolute top-[-30px] left-[-40px] h-[97px] w-[97px]'
            />
            <h2 className='text-6xl md:text-6xl lg:text-7xl font-bold'>123</h2>
            <div className='flex items-center min-w-[240px] ml-4'>
              <div className='stats-card_divider h-8'></div>
              <h3 className='text-[24px] font-400 text-[#667299] ml-4'>
                Completed Projects
              </h3>
            </div>
          </div>

          {/* CARD */}
          <div className='absolute right-[200px] top-[160px] p-6 md:p-8 lg:p-10 rounded shadow-xl bg-white z-[1] max-w-[270px]'>
            <img
              src={statsImg3}
              className='absolute top-[-30px] right-[-40px] h-[97px] w-[97px]'
            />
            <h2 className='text-6xl md:text-6xl lg:text-7xl font-bold'>37</h2>
            <div className='flex items-center min-w-[240px] ml-4'>
              <div className='stats-card_divider h-8'></div>
              <h3 className='text-[24px] font-400 text-[#667299] ml-4'>
                Awards Win
              </h3>
            </div>
          </div>

          {/* CARD */}
          <div className='absolute left-[30px] top-[300px] p-6 md:p-8 lg:p-10 rounded shadow-xl bg-white z-[0] max-w-sm'>
            <img
              src={statsImg4}
              className='absolute bottom-[-30px] right-[-40px] h-[84px] w-[84px]'
            />
            <h2 className='text-6xl md:text-6xl lg:text-7xl font-bold'>30</h2>
            <div className='flex items-center min-w-[240px] ml-4'>
              <div className='stats-card_divider h-8'></div>
              <h3 className='text-[24px] font-400 text-[#667299] ml-4'>
                Years in Business
              </h3>
            </div>
          </div>
        </div>

        <div className='max-w-[30%] mt-[60px]'>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-[#2947A9] mb-4'>
            30 Years Experience
          </h2>
          <p className='text-lg md:text-xl my-8'>
            Our company has been the leading provider of construction services
            to clients throughout the USA since 1988.
          </p>
          <button className='text-xl font-bold text-white bg-[#2947A9] py-4 px-6 mt-4'>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stats;
