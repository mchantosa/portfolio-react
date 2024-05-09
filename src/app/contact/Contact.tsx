import Section from "../utils/Section";
import Row from "../utils/Row";
import { contactTailwindGroup } from "./style";
const { infoTailwind, iWrapperTailwind, h4Tailwind, pTailwind, pInfoTailwind } =
  contactTailwindGroup;

export default function Contact() {
  return (
    <Section id="contact" title="Contact" theme="gray" additionalClassName="">
      <p className={pTailwind.join(" ")}>
        It is best to contact me through email, I screen my calls
      </p>
      <Row scale="large" additionalClassName="gap-5">
        <div className="w-full max-w-2xl lg:w-6/12 flex ">
          <div className={infoTailwind.join(" ")}>
            <div>
              <div className={iWrapperTailwind.join(" ")}>
                <i className="bx bx-envelope" />
              </div>
              <h4 className={h4Tailwind.join(" ")}>Email:</h4>
              <p className={pInfoTailwind.join(" ")}>
                meganemmamoore@gmail.com
              </p>
            </div>
            <div>
              <div className={iWrapperTailwind.join(" ")}>
                <i className="bx bx-phone" />
              </div>
              <h4 className={h4Tailwind.join(" ")}>Call:</h4>
              <p className={pInfoTailwind.join(" ")}>336-978-4359</p>
            </div>
            <div>
              <div className={iWrapperTailwind.join(" ")}>
                <i className="bx bx-map" />
              </div>
              <h4 className={h4Tailwind.join(" ")}>Location:</h4>
              <p className={pInfoTailwind.join(" ")}>Seattle, WA</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d172040.87733655708!2d-122.46375772407954!3d47.642871317631396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1696986732163!5m2!1sen!2sus"
              width="400"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="w-full max-w-2xl lg:w-6/12 flex items-stretch">
          <img
            src="/img/spaceneedle.jpg"
            className="img-fluid"
            alt="The Space Needle"
          />
        </div>
      </Row>
    </Section>
  );
}