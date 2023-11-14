import { navLinks } from '../constants';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar max-h-[80px]'>
      <div className='w-full flex py-6 justify-between items-center  xl:mx-[112px]'>
        <a href='#home' className='flex items-center'>
          <img src={logo} className='w-[38px] h-[47.5px]' />
          <span className='font-400 italic ml-1'>We</span>
          <span className='font-800'>Build</span>
        </a>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`cursor-pointer text-[18px] ${
                index === navLinks.length - 1
                  ? 'text-orange-500 font-500'
                  : 'mr-10'
              }`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
