import React from 'react'

const Token = () => {
  return (
    <section className="token-area">
    <img src="img/shapes/spring9.png" className="sp" alt="" />
    <div className="shape1 sp1" />
    <div className="shape2 sp2" />
    <div className="shape4 sp3" />
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 text-center">
          <div className="section-title" data-aos="fade-up">
            <h3>Token Utility</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="tokenwrps">
            <div className="showinphone d-block d-lg-none">
              <img src="img/token/showinphone.png" alt="" />
            </div>
            <div className="tokenwrps-blks tokenwrps-left">
              <div
                className="tokenwrps-content-blk"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div>
                  <h5>Real Yield</h5>
                  <p>
                    Protocol generated fees will be distributed to token
                    stakers
                  </p>
                </div>
                <img src="img/token/ti.png" alt="" />
              </div>
              <div
                className="tokenwrps-content-blk"
                data-aos="fade-up"
                data-aos-delay={250}
              >
                <div>
                  <h5>Access to RosyShark</h5>
                  <p>
                    Higher Risk strategies (30-50% APY) only available to
                    Token Stakers
                  </p>
                </div>
                <img src="img/token/ti2.png" alt="" />
              </div>
              <div
                className="tokenwrps-content-blk"
                data-aos="fade-up"
                data-aos-delay={350}
              >
                <div>
                  <h5>Builders Group Access</h5>
                  <p>Hang Out in one room with our strategy analysts</p>
                </div>
                <img src="img/token/ti3.png" alt="" />
              </div>
            </div>
            <div className="tokenwrps-middle">
              <img
                src="img/token/screenbg.png"
                className="bg"
                alt=""
              />
              <img
                src="img/token/screen.png"
                data-aos="zoom-out"
                data-aos-delay={50}
                className="main"
                alt=""
              />
            </div>
            <div className="tokenwrps-blks tokenwrps-right">
              <div
                className="tokenwrps-content-blk"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div>
                  <h5>Small Cap Whale Fund</h5>
                  <p>
                    The strategy follows low-cap whales, only available for
                    stakers
                  </p>
                </div>
                <img src="img/token/ti4.png" alt="" />
              </div>
              <div
                className="tokenwrps-content-blk"
                data-aos="fade-up"
                data-aos-delay={250}
              >
                <div>
                  <h5>Vault Creations</h5>
                  <p>
                    Token stakers will be able to create strategy vaults and
                    collect fees from depositors
                  </p>
                </div>
                <img src="img/token/ti5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Token