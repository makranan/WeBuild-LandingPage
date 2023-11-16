import styles from '../assets/styles/style';

const CTA = () => {
  return (
    <section className=''>
      <div className='text-center'>
        <h3 className='text-[36px] font-700 mb-4'>What can us do for you?</h3>
        <p className='text-[24px] font-300 mb-10'>
          We are ready to work on a project of any complexity, whether it’s
          commercial or residential.
        </p>
      </div>
      <form className={`${styles.formContainer}`}>
        <div className='flex flex-col justify-center'>
          <div className='flex xs:flex-row flex-col gap-4 mb-4'>
            <input
              id='fName'
              className='p-4 rounded bg-white border-2 border-[#E0E3EB] w-full xs:w-1/2'
              type='text'
              placeholder='First Name'
              aria-label='First name'
              required
            ></input>

            <input
              className='p-4 rounded bg-white border-2 border-[#E0E3EB] w-full xs:w-1/2'
              type='text'
              placeholder='Last Name'
              aria-label='Last name'
              required
            ></input>
          </div>

          <div className='flex xs:flex-row flex-col gap-4'>
            <input
              className='p-4 rounded bg-white border-2 border-[#E0E3EB] w-full xs:w-1/2'
              type='text'
              placeholder='Subject'
              aria-label='Subject'
              required
            ></input>

            <input
              className='p-4 rounded bg-white border-2 border-[#E0E3EB] w-full xs:w-1/2'
              type='email'
              placeholder='Email'
              aria-label='Email'
              required
            ></input>
          </div>
          <textarea
            className='p-4 rounded bg-white border-2 border-[#E0E3EB] w-full mt-4 mb-4'
            placeholder='Message'
            rows={5}
            aria-label='Message'
            required
          ></textarea>
          <button
            type='submit'
            className='text-[18px] font-600 text-white bg-[#2947A9] p-4'
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default CTA;
