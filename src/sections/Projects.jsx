import { arrowLeft, arrowRight } from '../assets';
import { project1, project2, project3, project4 } from '../assets';
import styles from '../assets/styles/style';

const data = [
  {
    id: 1,
    title: 'Wildstone Infra Hotel',
    location: 'Kolkata, India',
    type: 'commercial',
  },
  {
    id: 2,
    title: 'Wishstone Building',
    location: 'Illinois, USA',
    type: 'commercial',
  },
  {
    id: 3,
    title: "Mr. Parkinston's House",
    location: 'Pennsylvania, USA',
    type: 'residential',
  },
  {
    id: 4,
    title: 'Oregano Height',
    location: 'New York, USA',
    type: 'commercial',
  },
  {
    id: 5,
    title: 'Wildstone Infra Hotel',
    location: 'Kolkata, India',
    type: 'other',
  },
  {
    id: 6,
    title: 'Wildstone Infra Hotel',
    location: 'Kolkata, India',
    type: 'residential',
  },
];

const Card = ({ title, location, type }) => {
  return (
    <div className='w-[400px] h-[400px] bg-slate-400 rounded-lg p-4'>
      <div className='flex flex-row justify-between'>
        <h4 className='text-[18px] font-500'>{title}</h4>
        <p className='text-[14px] font-300'>{location}</p>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='text-[14px] font-300'>{type}</p>
        <button className='text-[14px] font-300'>View Details</button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className={`${styles.paddingX}`}>
      <h3 className='text-[36px] font-700'>Projects</h3>
      <div className='flex flex-row'>
        <div className='w-1/4 '>
          <ul className='flex flex-col gap-2'>
            <li className='text-[22px] font-700 text-[#2947A9]'>All</li>
            <li className='text-[22px] font-400 text-[#C2C7D6]'>Commercial</li>
            <li className='text-[22px] font-400 text-[#C2C7D6]'>Residential</li>
            <li className='text-[22px] font-400 text-[#C2C7D6]'>Other</li>
          </ul>
        </div>
        <div className='w-3/4 '>
          <div>{/* CARD PLACEHOLDER */}</div>

          <div className='flex flex-row items-center text-white'>
            <button className='flex justify-center items-center text-[18px] font-300 bg-[#292E3D] p-1 w-1/2 '>
              <img src={arrowLeft} className='w-4 h-4 mr-2' /> Back
            </button>
            <div className='flex flex-row'>
              <button className='w-3 h-3 bg-slate-400 rounded-full mx-1'></button>
              <button className='w-3 h-3 bg-slate-200 rounded-full mx-1'></button>
              <button className='w-3 h-3 bg-slate-200 rounded-full mx-1'></button>
              <button className='w-3 h-3 bg-slate-200 rounded-full mx-1'></button>
            </div>
            <button className='flex justify-center items-center text-[18px] font-300 bg-[#292E3D] p-1 w-1/2'>
              Next
              <img src={arrowRight} className='w-4 h-4 ml-2' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
