function Carousel() {
  return (
    <div className="about-slider swiper">
      <div className="swiper-wrapper align-items-center">
        <div className="swiper-slide">
          <img src="/img/aboutme/about-me-1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="/img/aboutme/about-me-2.jpg" className="img-fluid" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="/img/aboutme/about-me-3.jpg" className="img-fluid" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="/img/aboutme/about-me-4.jpg" className="img-fluid" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="/img/aboutme/about-me-5.jpg" className="img-fluid" alt="" />
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}
function AboutMeDetailed() {
  return (
    <>
      <h3>
        Software Engineer, Fullstack Developer, Frontend, Backend, Web Developer
        &amp; Quality Assurance Engineer.
      </h3>
      <p className="fst-italic">
        I enjoy hiking, reading, pushups, cuddling my naked cat, fire pits,
        coffee, tea, good food, Star Trek, SciFi, Scrabble, and puzzles.
      </p>
      <div className="row">
        <div className="col-lg-6">
          <ul>
            <li>
              <i className="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
              <span>MA Mathematics</span>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i>{" "}
              <strong>Availability:</strong> <span>Open to work</span>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i>{" "}
              <strong>Freelance:</strong> <span>Available</span>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li>
              <i className="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
              <span>meganemmamoore@gmail.com</span>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
              <span>336-978-4359</span>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
              <span>Seattle, WA</span>
            </li>
          </ul>
        </div>
      </div>
      <p>
        I am currently training AI through code evaluation and annotation with{" "}
        <a href="https://www.dataannotation.tech/" target="_blank">
          DataAnnotation
        </a>
        . I also do freelance development on the side. Feel free to reach out if
        you have a project on which you would like to collaborate. Checkout my
        projects and portfolio for more information.
      </p>
    </>
  );
}
export default function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>
              I am a software engineer, veteran, and mathematician. My passion
              lies in problem-solving, games, and puzzles. I spent several years
              doing Modeling and Simulation (primarily for DOD and DHS), then
              did a career transition to the software development space. In my
              spare time you would likely find me reading <u>The Expanse</u>,
              playing MTG, patronizing my local coffee shop, working out, or
              hiking in the beautiful PNW. I am enthusiastic, pragmatic, and
              committed to personal and professional development.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-5">
              {" "}
              {/* <!-- data-aos="fade-right" --> */}
              <Carousel />
            </div>
            <div className="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
              <AboutMeDetailed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
