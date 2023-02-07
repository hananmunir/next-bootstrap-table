import React from 'react'

const Coming = () => {
  return (
    <section className="comingsoon">
      <img src="img/shapes/spring8.png" className="sp" alt="" />
      <img src="img/shapes/spring7.png" className="sp2" alt="" />
      <div className="shape1 sp1" />
      <div className="shape4 sp2" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <div className="section-title" data-aos="fade-up">
              <h3>Coming Soon</h3>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="rosyblk-blks">
              <div className="rosyblk" data-aos="fade-up" data-aos-delay={50}>
                <img src="img/commingsoon/i.png" alt="" />
                Tradable Wallets - Coins never leave your wallet
              </div>
              <div className="rosyblk" data-aos="fade-up" data-aos-delay={100}>
                <img src="img/commingsoon/i2.png" alt="" />
                Fiat gateway - Deposit from Bank Straight to a smart contract
              </div>
              <div className="rosyblk" data-aos="fade-up" data-aos-delay={150}>
                <img src="img/commingsoon/i3.png" alt="" />
                Convert your TradingView script into a smart contract &amp; get
                paid
              </div>
              <div className="rosyblk" data-aos="fade-up" data-aos-delay={200}>
                <img src="img/commingsoon/i4.png" alt="" />
                Follow Small Cap Whales Strategy (Exclusive for $ROSY stakers)
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="commingsoon text-end">
              <img
                src="img/commingsoon/show.png"
                data-aos="zoom-out"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coming