import Header from "@/app/portfolio/Header";
import React from "react";

export default function Page() {
  return (
    <main id="main">
      <Header
        title="InnerCircle Details"
        crumbs={[
          { title: "Home", link: "/" },
          { title: "Portfolio", link: "/#portfolio" },
          { title: "InnerCircle", link: "" },
        ]}
      />

      {/* <!-- ======= Portfolio Details Section ======= --> */}
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide" data-swiper-autoplay="2000">
                    <img
                      src="assets/img/portfolio/innercircle/logo.png"
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide" data-swiper-autoplay="2000">
                    <img
                      src="assets/img/portfolio/innercircle/coffee_desk.jpg"
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide" data-swiper-autoplay="2000">
                    <img
                      src="assets/img/portfolio/innercircle/avatar_icon.png"
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide" data-swiper-autoplay="2000">
                    <img
                      src="assets/img/portfolio/innercircle/coffee_toast.jpg"
                      alt=""
                    />
                  </div>

                  <div className="swiper-slide" data-swiper-autoplay="2000">
                    <img
                      src="assets/img/portfolio/innercircle/letter.jpg"
                      alt=""
                    />
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
                    <strong>Category</strong>: Web Application and API
                  </li>
                  <li>
                    <strong>Client</strong>: Independent project
                  </li>
                  <li>
                    <strong>Project date</strong>: Published October 2023
                  </li>
                  <li>
                    <strong>Project status</strong>: Maintained and receiving
                    regular updates
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="https://innercircleprm.com/" target="_blank">
                      InnerCirlce
                    </a>
                  </li>
                  <li>
                    <strong>Code</strong>:{" "}
                    <a
                      href="https://github.com/mchantosa/smooth-kitty/tree/main"
                      target="_blank"
                    >
                      Github repo
                    </a>
                  </li>
                  <li>
                    <strong>Stack</strong>: TypeScript, Deno, Fresh framework,
                    Preact, Tailwind, Daisy UI, Deno-KV
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-description">
              <h2>About InnerCircle</h2>
              <p>
                I made this application to meet my communication desires and
                habits. This application is designed to be a medium agnostic,
                non-calendered, warm and user friendly, communication asset,
                intended to support a small to medium set of contacts.
              </p>
              <h2>Why medium agnostic?</h2>
              <p>
                Much of how we communicate now is determined by the
                communication mediums we share. Quitting Facebook is like
                changing your phone number. Is a friend any less a friend
                because you grew disenchanted with WhatsApp, or turned off with
                Twitter? This app organizes your communications around people,
                not communication mediums. When I organize my contacts by the
                mediums they use, they use SMS, Whatsapp, Google hangouts, FB
                messenger, slack, snapchat... If I only speak to people when I
                happen to frequent these mediums, I either miss conversations or
                I become a slave to my phone's alert system.
              </p>
              <h2>Why non-calendered?</h2>
              <p>
                What does your work-life balance calendar look like? Work
                meetings, social engagements, dentist appointments, sporting
                events, classes...? If you add - call mom - into your calendar,
                are you going to actually do it, or are you going to hit snooze
                or say "I'll get to it later." This app provides you with a
                weekly set of objectives (Sunday through Saturday), and rolls
                uncompleted objectives into the following week. The goal is
                communication when it is convenient for you.
              </p>
              <h2>In what way is it warm and user friendly?</h2>
              <p>
                This app has no calender and no alerts, it will not nag you. You
                reference it when you want to and get out what you put into it.
                My daughter is logged as having a preferred communication medium
                of "birria tacos" set to a biweekly objective where we talk
                about whatever or nothing. I use this app to remind me to
                periodically get a one on one taco with my kid.
              </p>
              <h2>Why a small to medium set of contacts?</h2>
              <p>
                It is possible to have thousands of "friends" across a
                half-dozen applications and still be completely alone.
                Communication is not manifested through connectivity, it is
                manifested through behavior. This application is intended to
                help you evaluate how much communication you want to maintain,
                and prioritize with whom you wish to maintain it.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Details Section --> */}
    </main>
  );
}
