import { arrowLeft, arrowRight } from '../assets';

const HeroSwitcher = ({ className }) => {
  return (
    <section className={className}>
      <div className='max-w-[410px]'>
        <div className=' bg-[#3559C7] p-10  text-center'>
          <h3 className='text-[20px] font-700 text-white mb-4'>
            Feature Projects
          </h3>
          <h2 className='text-[24px] font-300 text-white leading-6'>
            The National University of Architecture
          </h2>
        </div>
        <div className='text-white flex'>
          <button className='flex justify-center items-center text-[18px] font-300 bg-[#292E3D] p-1 w-1/2 '>
            <img src={arrowLeft} className='w-4 h-4 mr-2' /> Back
          </button>
          <div className='btn-divider'></div>
          <button className='flex justify-center items-center text-[18px] font-300 bg-[#292E3D] p-1 w-1/2'>
            Next
            <img src={arrowRight} className='w-4 h-4 ml-2' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSwitcher;
