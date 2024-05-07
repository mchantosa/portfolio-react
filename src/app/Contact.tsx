export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>It is best to contact me through email, I screen my calls</p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="info">
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>meganemmamoore@gmail.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>336-978-4359</p>
              </div>
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Seattle, WA</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d172040.87733655708!2d-122.46375772407954!3d47.642871317631396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1696986732163!5m2!1sen!2sus"
                width="400"
                height="300"
                // style="border:0;"
                // allowfullscreen=""
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch">
            <img
              src="assets/img/spaceneedle.jpg"
              className="img-fluid"
              alt="The Space Needle"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
