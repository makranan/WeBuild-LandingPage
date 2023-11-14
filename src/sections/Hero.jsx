import styles from '../assets/styles/style.js';
import { hero } from '../assets';

const Hero = () => {
  return (
    <section id='home' className={`${styles.boxWidth}`}>
      <div>
        <div className=''>
          <img src={hero} className='object-contain' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
