import React from 'react'

const RosyWhaale = () => {
  return (
    <section className="RosyWhaale-area">
      <img src="img/shapes/spring10.png" className="sp" alt="" />
      <div className="shape1 sp1" />
      <div className="shape2 sp2" />
      <div className="shape2 sp3" />
      <div className="shape2 sp4" />
      <div className="container" id="rosyWhale">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-title" data-aos="fade-in">
              <h3>What is RosyWhale</h3>
              <p>
                RosyWhale provides an on-chain infrastructure for strategy
                developers and proposes tailor-made DeFi strategies that
                outperform DCA &amp; HODL
              </p>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <a
              target="_blank"
              href="#"
              data-aos="fade-in"
              data-aos-delay=""
              className="btn"
            >
              Join Private Sale
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mt-4">
            <div className="rosyblk" data-aos="fade-in" data-aos-delay={100}>
              <img src="img/rosywhale/ri.png" alt="" />
              Earn real yield % by using market inefficiencies
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="rosyblk" data-aos="fade-in" data-aos-delay={150}>
              <img src="img/rosywhale/ri2.png" alt="" />
              Rosy is built on ZK-based infrastructure
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="rosyblk" data-aos="fade-in" data-aos-delay={200}>
              <img src="img/rosywhale/ri3.png" alt="" />
              Spend your yield directly - Rosy takes care of fiat on-ramper
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="rosyblk" data-aos="fade-in" data-aos-delay={250}>
              <img src="img/rosywhale/ri4.png" alt="" />
              Provide ZK-based infrastructure - create your own
              strategy&amp;earn profit share
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="rosyblk" data-aos="fade-in" data-aos-delay={300}>
              <img src="img/rosywhale/ri4.png" alt="" />
              Multicoin strategies - select your own risk
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className="rosyblk" data-aos="fade-in" data-aos-delay={350}>
              <img src="img/rosywhale/ri6.png" alt="" />
              100% self-custody
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RosyWhaale