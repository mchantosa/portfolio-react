import Section from "./Section";
export default function Resume() {
  return (
    <Section id="resume" title="Resume" theme="gray">
      <section className="resume">
        <div className="container">
          <div className="section-title">
            <h2>Resume</h2>
            <p style={{ paddingBottom: "12px" }}>
              <a href="./printable-resume.html" target="_blank">
                Printable Resume
              </a>
            </p>
            <p>
              I live in the greater Seattle area. When I moved to Seattle, I
              brought lessons learned from my commutes in DC. We picked the
              loveliest commute (by ferry) and kept going until we could afford
              a home. I do enjoy a hybrid schedule. My favorite schedule has
              been weekly, 2-3 days in, 2-3 days remote. That gives me the best
              of both worlds, the occasional happy hour/team lunch and parent
              teacher conference availability with time to devote to physical
              fitness.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Megan Chantosa</h4>
                <p>
                  <em>
                    I am a software engineer, currently open to data science,
                    fullstack, frontend, and backend development and quality
                    assurance engineer opportunities.
                  </em>
                </p>
                <ul>
                  <li>Seattle, WA</li>
                  <li>336-978-4359</li>
                  <li>meganemmamoore@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Code Academy, Launch School</h4>
                <h5>2021 - 2023</h5>
                <p>
                  <em>Completed fullstack JavaScript track</em>
                </p>
              </div>
              <div className="resume-item">
                <h4>MA, Wake Forest University</h4>
                <h5>2006 - 2008</h5>
                <p>
                  <em>Mathematics</em>
                </p>
              </div>
              <div className="resume-item">
                <h4>BS, North Carolina State University</h4>
                <h5>2004 - 2006</h5>
                <p>
                  <em>Mathematics</em>
                </p>
              </div>

              <h3 className="resume-title">Military</h3>
              <div className="resume-item">
                <h4>US Army, Non Commissioned Officer, E5</h4>
                <h5>1999 - 2003</h5>
                <p>
                  <em> Nuclear, Biological, and Chemical Reconnaissance</em>
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Software Developer - AI Trainer</h4>
                <h5>Mar 2024 - Present</h5>
                <p>
                  <em>DataAnnotations,Seattle, WA </em>
                </p>
                <ul>
                  <li>
                    Produce diverse coding challenges and solutions for training
                    AI models
                  </li>
                  <li>
                    Evaluate code quality produced by AI models for correctness
                    and performance
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Software Engineer</h4>
                <h5>May 2023 - Present</h5>
                <p>
                  <em>Freelance, Seattle, WA </em>
                </p>
                <ul>
                  <li>
                    Manage , maintain, and improve multiple WordPress websites
                    for client.
                  </li>
                  <li>
                    Created{" "}
                    <a href="https://innercircleprm.com/" target="_blank">
                      InnerCircle
                    </a>
                    , a personal relation manager. Built with Preact, Deno-KV,
                    and Tailwind.
                  </li>
                  <li>
                    Created{" "}
                    <a
                      href="https://githubraw.com/mchantosa/demos/main/awordle.html"
                      target="_blank"
                    >
                      aWordle
                    </a>
                    , a word guessing game strongly resembling Wordle. Built as
                    a single page vanilla HTML/CSS/JavaScript, "gist-able"
                    application.
                  </li>
                  <li>
                    Freelance{" "}
                    <a
                      href="https://hakuandnoel3dprints.com/ryan"
                      target="_blank"
                    >
                      portfolio
                    </a>{" "}
                    creation, client got the position for which the portfolio
                    was created.
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Caregiving</h4>
                <h5>Jun 2016 - Oct 2021</h5>
                <p>
                  <em>Seattle, WA </em>
                </p>
                <ul>
                  <li>
                    I took time off to bring work life balance to my household.
                  </li>
                  <li>Home taught kids through a pandemic.</li>
                  <li>Grew some mushrooms (oyster, lion's main, shiitake).</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Software Development Engineer Test (SDET)</h4>
                <h5>Aug 2013 - May 2016</h5>
                <p>
                  <em>Cortana Corporation, Falls Church, VA</em>
                </p>
                <ul>
                  <li>
                    Implemented and managed agile testing methodologies for
                    Nonconventional Exploitation Factors Data System (NEFDS)
                    with JIRA ensuring consistent delivery of high-quality
                    software through rigorous testing
                  </li>
                  <li>
                    Pioneered integration of Java and Selenium to automate
                    testing processes using Java and Selenium resulting in 100%
                    improvement of automated test capability
                  </li>
                  <li>
                    Developed comprehensive QA deliverables utilizing Microsoft
                    Word serving as essential documentation for user acceptance
                    testing (UAT) and enabling software allowlisting on
                    restricted networks
                  </li>
                  <li>
                    Conducted diverse testing activities, including manual,
                    smoke, integration, regression, end-to-end, and
                    cross-platform testing utilizing Java, Selenium, and Excel
                    resulting in increased test frequency by 500% and improved
                    scenario coverage by factor of 12, leading to delivery of
                    near bug-free software within deadlines
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Business Analyst/Quality Assurance Manager</h4>
                <h5>Jun 2014 - Sep 2015</h5>
                <p>
                  <em>1901 Group, Reston, VA</em>
                </p>
                <ul>
                  <li>
                    Successfully served as scrum master, effectively clearing
                    roadblocks for team of 6 developers, 3 QA resources, and IT
                    support across 4 branches of development
                  </li>
                  <li>
                    Managed team activities in Microsoft Agile DevOps resulting
                    in 100% improved customer satisfaction
                  </li>
                  <li>
                    Gathered requirements and oversaw testing efforts for all
                    software development initiatives, employing Agile DevOps
                    best practices resulting in optimized resource management
                    and 4 branches of development being simultaneously
                    maintained
                  </li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Operations Analyst</h4>
                <h5>Jan 2009 - Feb 2013</h5>
                <p>
                  <em>Metron, Inc., Reston, VA</em>
                </p>
                <ul>
                  <li>
                    Provided modeling and simulation analysis and support to all
                    phases of DoD acquisition process utilizing Naval Simulation
                    System and range of simulation tools and methodologies,
                    where contributions significantly informed acquisition
                    decisions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Section>
  );
}
