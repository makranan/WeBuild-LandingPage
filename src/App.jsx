/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';
import styles from './assets/styles/style.js';
import { Navbar, Footer } from './components';
import {
  About,
  Bottom,
  Hero,
  Services,
  Consult,
  CTA,
  Projects,
  Reasons,
  Stats,
} from './sections';

function App() {
  return (
    <>
      <div id='home' className='bg-white w-full overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Reasons />
          </div>
        </div>

        <div id='about' className={`${styles.flexCenter} ${styles.marginY}`}>
          <div className={`${styles.boxWidth}`}>
            <About />
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Services />
          </div>
        </div>

        <div className={`${styles.flexCenter} ${styles.marginY}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Consult />
          </div>
        </div>

        <div
          id='projects'
          className={`${styles.flexCenter} ${styles.paddingY}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Projects />
          </div>
        </div>

        <div
          id='contact'
          className={`${styles.flexCenter} ${styles.paddingY} ${styles.paddingX}`}
        >
          <div className={`${styles.boxWidth}`}>
            <CTA />
          </div>
        </div>

        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Bottom />
          </div>
        </div>

        <div className={`${styles.flexCenter} bg-[#2947A9] `}>
          {/* <div className={`${styles.boxWidth}`}> */}
          <Footer />
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
