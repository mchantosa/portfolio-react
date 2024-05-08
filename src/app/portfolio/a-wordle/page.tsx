import React from "react";

export default function Page() {
  return (
    <main id="main">
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>A Wordle Details</h2>
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li>A Wordle</li>
            </ol>
          </div>
        </div>
      </section>
      {/* <!-- End Breadcrumbs --> */}

      {/* <!-- ======= Portfolio Details Section ======= --> */}
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide" data-swiper-autoplay="2000">
                    <img src="assets/img/portfolio/awordle/game.png" alt="" />
                  </div>

                  <div className="swiper-slide" data-swiper-autoplay="2000">
                    <img
                      src="assets/img/portfolio/awordle/dictionary.jpg"
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide" data-swiper-autoplay="2000">
                    <img src="assets/img/portfolio/awordle/brunch.jpg" alt="" />
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Dynamic web application
                  </li>
                  <li>
                    <strong>Client</strong>: Independent project
                  </li>
                  <li>
                    <strong>Project date</strong>: Published May 2023
                  </li>
                  <li>
                    <strong>Project status</strong>: Maintained, bug fixes and
                    updates
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a
                      href="https://githubraw.com/mchantosa/demos/main/awordle.html"
                      target="_blank"
                    >
                      Play A Wordle
                    </a>
                  </li>
                  <li>
                    <strong>Code</strong>:{" "}
                    <a
                      href="https://github.com/mchantosa/demos/blob/main/awordle.html"
                      target="_blank"
                    >
                      Github repo
                    </a>
                  </li>
                  <li>
                    <strong>Stack</strong>: JavaScript, HTML, CSS
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-description">
              <h2>About A Wordle</h2>
              <p>
                This was an application I made for a technical challenge that
                requested a simple demo of code that could be communicated via
                gist. It took me a day to throw together and I had a lot of fun
                making it. I used two different dictionary APIs, one to generate
                a random word and one for definitions and checking that a user
                entered work is valid. I use ajax calls with each turn to
                validate then update the game state.
              </p>
              <h2>Use case</h2>
              <p>
                My family loves this game because the dictionaries are really
                really mean. This has become a family game we play communally
                when we go out and are waiting, usually food. The game does give
                you the definition in the end, so it can be a learning
                experience as well.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Details Section --> */}
    </main>
  );
}
