import React from 'react'

const RoadmaapSection = () => {
  return (
    <section className="roadmap-area">
      <img src="img/shapes/spring11.png" className="sp" alt="" />
      <div className="shape2 sp1" />
      <div className="shape2 sp2" />
      <div className="container" id="roadMap">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 text-center">
            <div className="section-title" data-aos="fade-up">
              <h3>Roadmap</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {/* <div class="roadmap-line">
                          <div class="roadmapBlk" data-aos="fade-in" data-aos-delay="50">
                              <div class="roadmapcontent">
                                  <div class="shapes"></div>
                                  <img src="img/roadmap/ro.png" alt="">
                                  <p>GAP 3.5 development & testing</p>
                              </div>
                              <div class="date" >2019-2022</div>
                          </div>
                          <div class="roadmapBlk" data-aos="fade-in" data-aos-delay="100">
                              <div class="roadmapcontent">
                                  <div class="shapes"></div>
                                  <img src="img/roadmap/ro2.png" alt="">
                                  <p>MVP Launch  (On CEXs)</p>
                              </div>
                              <div class="date">June 2022</div>
                          </div>
                          <div class="roadmapBlk" data-aos="fade-in" data-aos-delay="150">
                              <div class="roadmapcontent">
                                  <div class="shapes"></div>
                                  <img src="img/roadmap/ro3.png" alt="">
                                  <p>1M$ AUM and 500 active users</p>
                              </div>
                              <div class="date">December 2022</div>
                          </div>
                          <div class="roadmapBlk" data-aos="fade-in" data-aos-delay="200">
                              <div class="roadmapcontent">
                                  <div class="shapes"></div>
                                  <img src="img/roadmap/ro4.png" alt="">
                                  <p>Beta Launch (Onchain Strategies)</p>
                              </div>
                              <div class="date">February 2023</div>
                          </div>
                          <div class="roadmapBlk" data-aos="fade-in" data-aos-delay="250">
                              <div class="roadmapcontent">
                                  <div class="shapes"></div>
                                  <img src="img/roadmap/ro6.png" alt="">
                                  <p>Perpetuals (Leverage) strategy</p>
                              </div>
                              <div class="date">May 2023</div>
                          </div>
                          <div class="roadmapBlk" data-aos="fade-in" data-aos-delay="300">
                              <div class="roadmapcontent">
                                  <div class="shapes"></div>
                                  <img src="img/roadmap/ro7.png" alt="">
                                  <p>TV/Python Execution Mainnet</p>
                              </div>
                              <div class="date">July 2023</div>
                          </div>
                          <div class="roadmapBlk" data-aos="fade-in" data-aos-delay="350">
                              <div class="roadmapcontent">
                                  <div class="shapes"></div>
                                  <img src="img/roadmap/ro7.png" alt="">
                                  <p>Fiat On-Ramp</p>
                              </div>
                              <div class="date">August 2023</div>
                          </div>
                          <div class="roadmapBlk" data-aos="fade-in" data-aos-delay="400">
                              <div class="roadmapcontent">
                                  <div class="shapes"></div>
                                  <img src="img/roadmap/ro7.png" alt="">
                                  <p>zK-Rollup & Tradable Ledgers</p>
                              </div>
                              <div class="date">September 2023</div>
                          </div>
                          <div class="roadmapBlk" data-aos="fade-in" data-aos-delay="450">
                              <div class="roadmapcontent">
                                  <div class="shapes"></div>
                                  <img src="img/roadmap/ro7.png" alt="">
                                  <p>RosyVaults & Rankings</p>
                              </div>
                              <div class="date">November 2023</div>
                          </div>
                      </div> */}
            {/* owl carousel */}
            <div className="owl-carousel">
              <div className="newRoadMapCard">
                <h6>December 2022</h6>
                <img src="img/owlimg.svg" alt="" />
                <p>
                  1M$ AUM and 500
                  <br />
                  active users
                </p>
              </div>
              <div className="newRoadMapCard">
                <h6>May 2023</h6>
                <img src="img/owl-icon (1).svg" alt="" />
                <p>
                  Perpetuals
                  <br />
                  (Leverage) strategy
                </p>
              </div>
              <div className="newRoadMapCard">
                <h6>February 2023</h6>
                <img src="img/owl-icon (2).svg" alt="" />
                <p>
                  Beta Launch
                  <br />
                  (Onchain Strategies)
                </p>
              </div>
              <div className="newRoadMapCard">
                <h6>June 2022</h6>
                <img src="img/owl-icon (3).svg" alt="" />
                <p>
                  {" "}
                  MVP Launch&nbsp;
                  <br />
                  (On CEXs)
                </p>
              </div>
              <div className="newRoadMapCard">
                <h6>2019-2022</h6>
                <img src="img/owl-icon (4).svg" alt="" />
                <p>
                  GAP 3.5 development
                  <br />
                  &amp; testing
                </p>
              </div>
              <div className="newRoadMapCard">
                <h6>December 2022</h6>
                <img src="img/owlimg.svg" alt="" />
                <p>
                  1M$ AUM and 500
                  <br />
                  active users
                </p>
              </div>
              <div className="newRoadMapCard">
                <h6>May 2023</h6>
                <img src="img/owl-icon (1).svg" alt="" />
                <p>
                  Perpetuals
                  <br />
                  (Leverage) strategy
                </p>
              </div>
              <div className="newRoadMapCard">
                <h6>February 2023</h6>
                <img src="img/owl-icon (2).svg" alt="" />
                <p>
                  Beta Launch
                  <br />
                  (Onchain Strategies)
                </p>
              </div>
              <div className="newRoadMapCard">
                <h6>June 2022</h6>
                <img src="img/owl-icon (3).svg" alt="" />
                <p>
                  {" "}
                  MVP Launch&nbsp;
                  <br />
                  (On CEXs)
                </p>
              </div>
              <div className="newRoadMapCard">
                <h6>2019-2022</h6>
                <img src="img/owl-icon (4).svg" alt="" />
                <p>
                  GAP 3.5 development
                  <br />
                  &amp; testing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default RoadmaapSection