import React from "react";

const Hero = () => {
  return (
    <section className='Hero-Area'>
      <div className='shape1 first' />
      <div className='shape2 first' />
      <div className='shape1 last' />
      <div className='shape2 last' />
      <div className='shape3' />
      <img src='img/shapes/spring.png' className='spr' alt='' />
      <img src='img/shapes/spring2.png' className='spr2' alt='' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='hero-left' data-aos='fade-up'>
              <span>
                Discover how to earn more. Full custody &amp; on-chain
              </span>
              <h1>On-chain asset management</h1>
              <h4>Grow your income on chain.</h4>
              <p>
                Rosy leverages market inefficiencies and offers various
                risk-level on-chain strategies to earn up to 49.2% APY. Possible
                by ZK-based infrastructure. 100% your own custody.{" "}
              </p>
              <a target='_blank' href='#' className='btn'>
                Join Private Sale
              </a>
              <div id='countdown'>
                <ul>
                  <li>
                    <span id='days' />
                    days
                  </li>
                  <li>
                    <span id='hours' />
                    Hours
                  </li>
                  <li>
                    <span id='minutes' />
                    Minutes
                  </li>
                  <li>
                    <span id='seconds' />
                    Seconds
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-6 mt-5 mt-lg-0'>
            <div className='hero-right' data-aos='zoom-out' data-aos-delay={50}>
              <img className='firstImg' src='img/header/screen.png' alt='' />
              <img className='secondImg' src='img/header/screen2.png' alt='' />
            </div>
          </div>
          <div className='showofData' data-aos='fade-up' data-aos-delay={100}>
            <div className='shdBlk'>
              <h4>450+</h4>
              <span>ACTIVE USERS</span>
            </div>
            <div className='shdBlk '>
              <h4>
                4+{" "}
                <span>
                  year in the
                  <br />
                  development.
                </span>
              </h4>
              <span>ZK-SYNC infrastructure</span>
            </div>
            <div className='shdBlk border-0 desktopVersion'>
              <h4>
                1,2 AUM <span>User Assets</span>
              </h4>
              <span>February 2023</span>
            </div>
          </div>
          <div className='shdBlk border-0 mobileVersion'>
            <h4>
              1,2 AUM <span>User assets</span>
            </h4>
            <span>February 2023</span>
          </div>
          <div className='col-lg-12'>
            <div className='brands' data-aos='fade-up' data-aos-delay={100}>
              <img src='img/header/brand-logo.png' alt='' />
              <img src='img/header/brand-logo3.png' alt='' />
              <img src='img/header/brand-logo5.png' alt='' />
              <img src='img/header/brand-logo7.png' alt='' />
              <img src='img/header/brand-logo6.png' alt='' />
              <img src='img/header/brand-logo4.png' alt='' />
              <img src='img/header/brand-logo2.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
