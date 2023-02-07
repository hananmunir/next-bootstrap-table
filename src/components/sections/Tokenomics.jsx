import React from "react";

const Tokenomics = () => {
  return (
    <section className='Tokenomics-area'>
      <img src='img/shapes/spring8.png' className='sp' alt='' />
      <img src='img/shapes/spring4.png' className='sp2' alt='' />
      <div className='shape1 sp1' />
      <div className='shape2 sp2' />
      <div className='shape2 sp3' />
      <div className='shape2 sp4' />
      <div className='shape4 sp5' />
      <div className='container' id='tokenomics'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='tokenomics-left text-center mb-5 mb-lg-0 '>
              <div className='section-title' data-aos='fade-in'>
                <h3>Tokenomics</h3>
                <p>450M $ROSY tokens will be minted in Q2 2023</p>
              </div>
              {/* <img data-aos="zoom-out" src="assets/img/tokenomics/chart.svg" alt=""> */}
              <div className='chartContainer'>
                <div className='graphText'>
                  4%
                  <br />
                  Public round
                </div>
                <div className='graphText'>
                  6%
                  <br />
                  Liquidity
                </div>
                <div className='graphText'>
                  10%
                  <br />
                  Operational
                </div>
                <div className='graphText'>
                  3%
                  <br />
                  Early Bird
                </div>
                <div className='graphText'>
                  15%
                  <br />
                  Rewards for
                  <br />
                  Analysts
                </div>
                <div className='graphText'>
                  12%
                  <br />
                  Private round
                </div>
                <div className='graphText'>
                  8%
                  <br />
                  Team
                </div>
                <div className='graphText'>
                  5%
                  <br />
                  Advisors
                </div>
                <div className='graphText'>
                  10%
                  <br />
                  Marketing
                </div>
                <div className='graphText'>
                  12%
                  <br />
                  Seed round
                </div>
                <div className='graphText'>
                  5%
                  <br />
                  Airdrops
                </div>
                <div className='graphText'>
                  10%
                  <br />
                  Treasury
                </div>
                <div id='donutChart1' />
              </div>
              <a
                target='_blank'
                href='#'
                data-aos='fade-up'
                data-aos-delay={50}
                className='btn mx-auto'
              >
                Private Sale
              </a>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='tokenomics-right'>
              <div className='tknTable' id='tknTable'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>token name</th>

                      <th scope='col'></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Initial Circulating Supply</td>
                      <td>20M</td>
                    </tr>
                    <tr>
                      <td>Initial Market Cap</td>
                      <td>1.2M USD</td>
                    </tr>
                    <tr>
                      <td>Total Supply</td>
                      <td>450,000,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                className='tknBlk'
                id='tknBlk1'
                style={{ borderLeftColor: "#00A4E9" }}
                data-aos='fade-up'
                data-aos-delay={50}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#00A4E9" }}>3%</h4>
                  <p>Early Bird</p>
                </div>
                <p>
                  3% of tokens is offered. 12 months linear daily vesting. 3
                  months cliff (5% at TGE)
                </p>
              </div>
              <div
                className='tknBlk'
                id='tknBlk2'
                style={{ borderLeftColor: "#47B735" }}
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#47B735" }}>15%</h4>
                  <p>Rewards for Analysts</p>
                </div>
                <p>15% of tokens is offered. 12 months linear daily vesting</p>
              </div>
              <div
                className='tknBlk'
                id='tknBlk3'
                style={{ borderLeftColor: "#B3C83C" }}
                data-aos='fade-up'
                data-aos-delay={150}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#B3C83C" }}>12%</h4>
                  <p>Private round</p>
                </div>
                <p>
                  12% of tokens is offered. 10 months linear daily vesting. 1
                  months cliff (15% at TGE)
                </p>
              </div>
              <div
                className='tknBlk'
                id='tknBlk4'
                style={{ borderLeftColor: "#EBD95E" }}
                data-aos='fade-up'
                data-aos-delay={200}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#EBD95E" }}>8%</h4>
                  <p>Team</p>
                </div>
                <p>
                  8% of tokens is offered. 12 months cliff, 12 months linear
                  daily vesting{" "}
                </p>
              </div>
              <div
                className='tknBlk'
                id='tknBlk5'
                style={{ borderLeftColor: "#F0B63C" }}
                data-aos='fade-up'
                data-aos-delay={250}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#F0B63C" }}>5%</h4>
                  <p>Advisors</p>
                </div>
                <p>
                  5% of tokens is offered. 8 months cliff, 10 months linear
                  daily
                </p>
              </div>
              <div
                className='tknBlk'
                id='tknBlk6'
                style={{ borderLeftColor: "#F5912F" }}
                data-aos='fade-up'
                data-aos-delay={300}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#F5912F" }}>10%</h4>
                  <p>Marketing</p>
                </div>
                <p>10% of tokens is offered. 24 months linear daily vesting</p>
              </div>
              <div
                className='tknBlk'
                id='tknBlk7'
                style={{ borderLeftColor: "#FD6191" }}
                data-aos='fade-up'
                data-aos-delay={350}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#FD6191" }}>12%</h4>
                  <p>Seed round</p>
                </div>
                <p>
                  12% of tokens is offered. 11 months linear daily vesting. 2
                  months cliff (5% at TGE)
                </p>
              </div>
              <div
                className='tknBlk'
                id='tknBlk8'
                style={{ borderLeftColor: "#F24B40" }}
                data-aos='fade-up'
                data-aos-delay={450}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#F24B40" }}>4%</h4>
                  <p>Public round</p>
                </div>
                <p>
                  4% of tokens is offered. 8 months linear daily vesting. 1
                  months cliff (20% at TGE)
                </p>
              </div>
              <div
                className='tknBlk'
                id='tknBlk9'
                style={{ borderLeftColor: "#D246DD" }}
                data-aos='fade-up'
                data-aos-delay={450}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#D246DD" }}>6%</h4>
                  <p>Liquidity</p>
                </div>
                <p>Provide liquidity for launch on CEXs and DEXs</p>
              </div>
              <div
                className='tknBlk'
                id='tknBlk10'
                style={{ borderLeftColor: "#7C2CE2" }}
                data-aos='fade-up'
                data-aos-delay={450}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#7C2CE2" }}>10%</h4>
                  <p>Operational</p>
                </div>
                <p>10% of tokens is offered. 24 months linear daily vesting</p>
              </div>
              <div
                className='tknBlk'
                id='tknBlk11'
                style={{ borderLeftColor: "#cfa5ef" }}
                data-aos='fade-up'
                data-aos-delay={450}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#cfa5ef" }}>5%</h4>
                  <p>Airdrops</p>
                </div>
                <p>Distributing rewards to communities</p>
              </div>
              <div
                className='tknBlk'
                id='tknBlk12'
                style={{ borderLeftColor: "#0afc00" }}
                data-aos='fade-up'
                data-aos-delay={450}
              >
                <div className='tknBlk-left'>
                  <h4 style={{ color: "#0afc00" }}>10%</h4>
                  <p>Treasury</p>
                </div>
                <p>10% of tokens is offered. 24 months linear daily vesting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
