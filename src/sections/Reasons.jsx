import styles from '../assets/styles/style';
import { reasonIcon1, reasonIcon2 } from '../assets';

const CardData = [
  {
    title: 'Best Services',
    description: 'Nullam senectus porttitor in eget. Eget rutrum leo interdum.',
    icon: reasonIcon1,
  },
  {
    title: 'Best Teams',
    description: 'Cursus semper tellus volutpat aliquet lacus.',
    icon: reasonIcon1,
  },
  {
    title: 'Best Designs',
    description: 'Ultricies at ipsum nunc, tristique nam lectus.',
    icon: reasonIcon2,
  },
];

const RepCard = ({ title, description, icon }) => (
  <div className='rep-card w-[292px] h-auto'>
    <img src={icon} />
    <h3 className='my-4'>{title}</h3>
    <p>{description}</p>
  </div>
);

const Reasons = () => {
  return (
    <section className={`${styles.flexCenter}`}>
      <div
        className={`flex flex-col w-full ${styles.paddingY} ${styles.paddingX}`}
      >
        <h2 className='font-700 text-[36px] text-center mb-16'>
          Our Reputation
        </h2>

        <div className='flex flex-row justify-between flex-wrap gap-10'>
          {CardData.map((card, index) => (
            <RepCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
