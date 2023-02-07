import React from "react";
import { BiEdit } from "react-icons/bi";
import { RiExchangeDollarFill } from "react-icons/ri";
import { TbSettingsAutomation } from "react-icons/tb";

import { GiMoneyStack } from "react-icons/gi";
const HowWork = () => {
  return (
    <section className='howwork-area'>
      <img src='img/shapes/spring12.png' className='sp' alt='' />
      <div className='shape1 sp1' />
      <div className='shape1 sp2' />
      <div className='shape2 sp3' />
      <div className='shape2 sp4' />
      <div className='shape2 sp5' />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 offset-lg-3 text-center'>
            <div className='section-title' data-aos='fade-up'>
              <h3>How does it work?</h3>
              <p>
                A smart crypto trading bot with an advanced risk-management
                technique in one single (soon-to-be) decentralized platform
              </p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='workingblks'>
              <div className='wrkBlk' data-aos='fade-in'>
                <div className='bicon editIcon'>
                  <BiEdit />
                </div>
                <img
                  src='img/how-work/line-shape.png'
                  className='line'
                  alt=''
                />
                <h5>Register above</h5>
                <p>
                  No identity verification, no loss of custodial rights - your
                  keys, your crypto
                </p>
              </div>
              <div className='wrkBlk' data-aos='fade-in' data-aos-delay={50}>
                <div className='bicon exchangeIcon'>
                  <RiExchangeDollarFill />
                </div>
                <img
                  src='img/how-work/line-shape.png'
                  className='line-up'
                  alt=''
                />
                <h5>Select an exchange</h5>
                <p>
                  And make sure your spot-wallet has at least 1000 USD worth of
                  crypto
                </p>
              </div>
              <div className='wrkBlk' data-aos='fade-in' data-aos-delay={100}>
                <div className='bicon automationIcon'>
                  <TbSettingsAutomation />
                </div>
                <img
                  src='img/how-work/line-shape.png'
                  className='line'
                  alt=''
                />
                <h5>Automation Started</h5>
                <p>
                  Rosy reads your portfolio and manages it 24/7 without human
                  interaction
                </p>
              </div>
              <div className='wrkBlk' data-aos='fade-in' data-aos-delay={150}>
                <div className='bicon earnIcon'>
                  <GiMoneyStack />
                </div>
                <h5>Earn passively</h5>
                <p>
                  Rosy grows your porfolio, and provides you with full
                  transparency of your trades
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWork;
