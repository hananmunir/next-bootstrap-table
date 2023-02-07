import React from 'react'

const Performan = () => {
  return (
    <section className="performance-area">
    <img
      src="img/shapes/spring3.png"
      className="sp animate__pulse"
      alt=""
    />
    <div className="shape2 first" />
    <div className="shape2 last" />
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="performance-wrp">
            <h2 data-aos="fade-up">
              The real yield for early adopters fully on-chain <br />
              Performance
              <br />
            </h2>
            <button
              type="#"
              data-aos="fade-up"
              data-aos-delay={100}
              className="btn"
            >
              Low Risk <img src="img/lowrisk/gdwn.png" alt="" />
            </button>
            {/* <img data-aos="fade-in" data-aos-delay="150" src="img/lowrisk/lowrisk.png" alt=""> */}
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div id="multiCharts" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Performan