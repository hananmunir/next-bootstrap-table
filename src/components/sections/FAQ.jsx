import React from 'react'

const FAQ = () => {
  return (
    <section className="faq-area">
      <div className="shape4 sp1" />
      <div className="shape2 sp2" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title" data-aos="fade-up">
              <h3>Frequently Asked Question</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="accordion" id="accordionExample">
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay={50}
              >
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Is it available?
                </button>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    At the moment, only early-stage investors can test the
                    automation strategy. The public launch is planned for H2
                    2023.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  Do you hold my keys?
                </button>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Your keys - your crypto. We do not own or create wallets for
                    users - Rosy connects to your exchange wallet via API keys
                    without withdrawal rights. In the near future, we will
                    launch fully decentralized access via Metamask
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  How safe is trading on ROSY WHALE?
                </button>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Very safe. We have performed forward-testing since January
                    2019 with great results. You just have to provide API keys
                    to enable trading. No withdrawal rights are granted to us.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  How to stop automated trading?
                </button>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    You can delete your API keys on the bot's app and it will
                    automatically stop trading. You can either sell your coins
                    manually or click on “Sell All Positions” button. The bot
                    will sell all your current positions to USDT.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay={250}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="true"
                  aria-controls="collapseFive"
                >
                  What happens with my current portfolio on Binance?
                </button>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    The bot starts trading automatically all the positions that
                    you have in your Spot Account. If you decide not to trade a
                    certain asset, move it to the Funding Account.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFSix"
                  aria-expanded="true"
                  aria-controls="collapseFSix"
                >
                  What happens in case of a market crash?
                </button>
                <div
                  id="collapseFSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    You may see a temporary drawdown on your portfolio. However,
                    you are never too exposed to the market and our strategy
                    works best, when the market crashes. You can expect much
                    bigger increase in your profolio, few months after market
                    crash, because the strategies does its best buying bottoms
                    when the prices crashing and selling local tops during
                    relief rallies.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="faq-right">
              <img src="img/faq/que.png" alt="" data-aos="zoom-out" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ