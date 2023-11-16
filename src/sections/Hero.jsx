import styles from '../assets/styles/style.js';
import { hero1 } from '../assets';
import { HeroSwitcher } from '../components';

const Hero = () => {
  return (
    <section className={`${styles.boxWidth}`}>
      <div className='relative innerShadowContainer'>
        <HeroSwitcher className='absolute bottom-0 right-0' />
        <img src={hero1} className='object-contain' />
      </div>
    </section>
  );
};

export default Hero;
