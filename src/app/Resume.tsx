import Section from "./Section";
import Row from "./Row";
import {
  headersTailwind,
  paragraphTailwind,
  anchorTailwind,
  unorderedListTailwind,
  listItemTailwind,
} from "./styles/style";
import { poppins } from "./utils/fonts";
import React from "react";

const aTailwind = anchorTailwind;
const ulTailwind = unorderedListTailwind;
const liTailwind = listItemTailwind;
const pTailwind = [...paragraphTailwind, "pb-2"];
const h3Tailwind = [
  ...headersTailwind.header3Tailwind,
  "mt-5",
  "mb-5",
  "text-headerGray",
];
const h4Tailwind = [
  ...headersTailwind.header4Tailwind,
  poppins.className,
  "text-headerBlue",
  "leading-5",
  "mb-2",
];
const h5Tailwind = [...headersTailwind.header5Tailwind, "px-4", "py-1", "mb-2"];
const h6Tailwind = [
  ...headersTailwind.header6Tailwind,
  "text-borderBlue",
  "mb-2",
];

function SkillSet(props: {
  skillTitle: string;
  skills: string[];
  children: any;
}) {
  const { skillTitle, skills } = props;
  const spanTailwind = ["text-anchorBlue", "font-bold"];
  const skillDivTailwind = [
    ...paragraphTailwind,
    "flex",
    "flex-row",
    "flex-wrap",
    "items-center",
    "justify-center",
    "gap-2",
    "pb-4",
    "px-8",
  ];

  return (
    <>
      <h6 className={h6Tailwind.join(" ")}>{skillTitle}</h6>
      <div className={skillDivTailwind.join(" ")}>
        {skills.map((item, index) => (
          <React.Fragment key={item}>
            {index > 0 && (
              <span className={spanTailwind.join(" ")}>
                &nbsp;&#x25AA;&nbsp;
              </span>
            )}
            {item}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

function ResumeItem(props: { title: string; children: any }) {
  const { title, children } = props;
  const resumeItemTailwind = [
    "pl-5",
    "pt-0",
    "pb-5",
    "mt-n2",
    "border-l-2",
    "border-borderBlue",
    "relative",
  ];
  const resumeItemBeforeTailwind = [
    "before:absolute",
    "before:w-4",
    "before:h-4",
    "before:rounded-full",
    "before:left-[-9px]",
    "before:top-0",
    "before:bg-white",
    "before:border-2",
    "before:border-borderBlue",
  ];
  return (
    <>
      {title && <h3 className={h3Tailwind.join(" ")}>{title}</h3>}
      <div
        className={[...resumeItemTailwind, ...resumeItemBeforeTailwind].join(
          " "
        )}
      >
        {children}
      </div>
    </>
  );
}

function ExperienceItem(props: {
  title: string;
  jobTitle: string;
  fromTo: string;
  where: string;
  children: any;
}) {
  const { title, jobTitle, fromTo, where, children } = props;

  return (
    <ResumeItem title={title}>
      <h4 className={h4Tailwind.join(" ")}>{jobTitle}</h4>
      <h5 className={h5Tailwind.join(" ")}>{fromTo}</h5>
      <p className={pTailwind.join(" ")}>
        <em>{where}</em>
      </p>
      {children}
    </ResumeItem>
  );
}
export default function Resume() {
  return (
    <Section id="resume" title="Resume" theme="gray" additionalClassName="">
      <p className={(pTailwind.join(" "), "pb-4")}>
        <a
          href="./printable-resume.html"
          target="_blank"
          className={aTailwind.join(" ")}
        >
          Printable Resume
        </a>
      </p>
      <Row scale="large" additionalClassName="pb-4">
        <p className={pTailwind.join(" ")}>
          I live in the greater Seattle area. When I moved to Seattle, I brought
          lessons learned from my commutes in DC. We picked the loveliest
          commute (by ferry) and kept going until we could afford a home. I do
          enjoy a hybrid schedule. My favorite schedule has been weekly, 2-3
          days in, 2-3 days remote. That gives me the best of both worlds, the
          occasional happy hour/team lunch and parent teacher conference
          availability with time to devote to physical fitness.
        </p>
      </Row>
      <Row scale="large">
        <div className="lg:w-5/12">
          <ResumeItem title="Summary">
            <h4 className={h4Tailwind.join(" ")}>Megan Chantosa</h4>
            <p className={pTailwind.join(" ")}>
              <em>
                I am a software engineer, currently open to data science,
                fullstack, frontend, and backend development and quality
                assurance engineer opportunities.
              </em>
            </p>
            <ul className={ulTailwind.join(" ")}>
              <li className={liTailwind.join(" ")}>Seattle, WA</li>
              <li className={liTailwind.join(" ")}>336-978-4359</li>
              <li className={liTailwind.join(" ")}>meganemmamoore@gmail.com</li>
            </ul>
          </ResumeItem>
          <ResumeItem title="Education">
            <h4 className={h4Tailwind.join(" ")}>
              Code Academy, Launch School
            </h4>
            <h5 className={h5Tailwind.join(" ")}>2021 - 2023</h5>
            <p className={pTailwind.join(" ")}>
              <em>Completed fullstack JavaScript track</em>
            </p>
          </ResumeItem>
          <ResumeItem title="">
            <h4 className={h4Tailwind.join(" ")}>MA, Wake Forest University</h4>
            <h5 className={h5Tailwind.join(" ")}>2006 - 2008</h5>
            <p className={pTailwind.join(" ")}>
              <em>Mathematics</em>
            </p>
          </ResumeItem>
          <ResumeItem title="">
            <h4 className={h4Tailwind.join(" ")}>
              BS, North Carolina State University
            </h4>
            <h5 className={h5Tailwind.join(" ")}>2004 - 2006</h5>
            <p className={pTailwind.join(" ")}>
              <em>Mathematics</em>
            </p>
          </ResumeItem>
          <ResumeItem title="Military">
            <h4 className={h4Tailwind.join(" ")}>
              US Army, Non Commissioned Officer, E5
            </h4>
            <h5 className={h5Tailwind.join(" ")}>1999 - 2003</h5>
            <p className={pTailwind.join(" ")}>
              <em> Nuclear, Biological, and Chemical Reconnaissance</em>
            </p>
          </ResumeItem>
          <ResumeItem title="Skills">
            <SkillSet
              skillTitle="Languages"
              skills={[
                "JavaScript",
                "TypeScript",
                "Python",
                "Java",
                "R",
                "MatLab",
              ]}
              children={""}
            />
            <SkillSet
              skillTitle="Environments"
              skills={["Node", "Deno", "JRM"]}
              children={""}
            />
            <SkillSet
              skillTitle="Frameworks"
              skills={["React", "Express", "Fresh"]}
              children={""}
            />
            <SkillSet
              skillTitle="Databases"
              skills={["PostgreSQL", "Supabase", "Deno-KV"]}
              children={""}
            />
            <SkillSet
              skillTitle="DevOps"
              skills={["Docker", "AWS", "Git"]}
              children={""}
            />
            <SkillSet
              skillTitle="Testing"
              skills={["Jest", "Cypress", "Postman", "jUnit"]}
              children={""}
            />
            <SkillSet
              skillTitle="Front End"
              skills={["HTML", "CSS", "Tailwind", "Bootstrap", "Daisy UI"]}
              children={""}
            />
            <SkillSet
              skillTitle="Team/Human"
              skills={["Agile", "Scrum", "Jira", "Azure DevOps"]}
              children={""}
            />
          </ResumeItem>
        </div>
        <div className="lg:w-6/12">
          <ExperienceItem
            title="Professional Experience"
            jobTitle="Software Developer - AI Trainer"
            fromTo="Mar 2024 - Present"
            where="DataAnnotations,Seattle, WA"
          >
            <ul className={ulTailwind.join(" ")}>
              <li className={liTailwind.join(" ")}>
                Produce diverse coding challenges and solutions for training AI
                models
              </li>
              <li className={liTailwind.join(" ")}>
                Evaluate code quality produced by AI models for correctness and
                performance
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem
            title=""
            jobTitle="Software Engineer"
            fromTo="May 2023 - Present"
            where="Freelance, Seattle, WA"
          >
            <ul className={ulTailwind.join(" ")}>
              <li className={liTailwind.join(" ")}>
                Manage , maintain, and improve multiple WordPress websites for
                client.
              </li>
              <li className={liTailwind.join(" ")}>
                Created{" "}
                <a
                  href="https://innercircleprm.com/"
                  target="_blank"
                  className={aTailwind.join(" ")}
                >
                  InnerCircle
                </a>
                , a personal relation manager. Built with Preact, Deno-KV, and
                Tailwind.
              </li>
              <li className={liTailwind.join(" ")}>
                Created{" "}
                <a
                  href="https://githubraw.com/mchantosa/demos/main/awordle.html"
                  target="_blank"
                  className={aTailwind.join(" ")}
                >
                  aWordle
                </a>
                , a word guessing game strongly resembling Wordle. Built as a
                single page vanilla HTML/CSS/JavaScript, "gist-able"
                application.
              </li>
              <li className={liTailwind.join(" ")}>
                Freelance{" "}
                <a
                  href="https://hakuandnoel3dprints.com/ryan"
                  target="_blank"
                  className={aTailwind.join(" ")}
                >
                  portfolio
                </a>{" "}
                creation, client got the position for which the portfolio was
                created.
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem
            title=""
            jobTitle="Caregiving"
            fromTo="Jun 2016 - Oct 2021"
            where="Seattle, WA"
          >
            <ul className={ulTailwind.join(" ")}>
              <li className={liTailwind.join(" ")}>
                I took time off to bring work life balance to my household.
              </li>
              <li className={liTailwind.join(" ")}>
                Home taught kids through a pandemic.
              </li>
              <li className={liTailwind.join(" ")}>
                Grew some mushrooms (oyster, lion's main, shiitake).
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem
            title=""
            jobTitle="Software Development Engineer Test (SDET)"
            fromTo="Aug 2013 - May 2016"
            where="Cortana Corporation, Falls Church, VA"
          >
            <ul className={ulTailwind.join(" ")}>
              <li className={liTailwind.join(" ")}>
                Implemented and managed agile testing methodologies for
                Nonconventional Exploitation Factors Data System (NEFDS) with
                JIRA ensuring consistent delivery of high-quality software
                through rigorous testing
              </li>
              <li className={liTailwind.join(" ")}>
                Pioneered integration of Java and Selenium to automate testing
                processes using Java and Selenium resulting in 100% improvement
                of automated test capability
              </li>
              <li className={liTailwind.join(" ")}>
                Developed comprehensive QA deliverables utilizing Microsoft Word
                serving as essential documentation for user acceptance testing
                (UAT) and enabling software allowlisting on restricted networks
              </li>
              <li className={liTailwind.join(" ")}>
                Conducted diverse testing activities, including manual, smoke,
                integration, regression, end-to-end, and cross-platform testing
                utilizing Java, Selenium, and Excel resulting in increased test
                frequency by 500% and improved scenario coverage by factor of
                12, leading to delivery of near bug-free software within
                deadlines
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem
            title=""
            jobTitle="Business Analyst/QA Manager"
            fromTo="Jun 2014 - Sep 2015"
            where="1901 Group, Reston, VA"
          >
            <ul className={ulTailwind.join(" ")}>
              <li className={liTailwind.join(" ")}>
                Successfully served as scrum master, effectively clearing
                roadblocks for team of 6 developers, 3 QA resources, and IT
                support across 4 branches of development
              </li>
              <li className={liTailwind.join(" ")}>
                Managed team activities in Microsoft Agile DevOps resulting in
                100% improved customer satisfaction
              </li>
              <li className={liTailwind.join(" ")}>
                Gathered requirements and oversaw testing efforts for all
                software development initiatives, employing Agile DevOps best
                practices resulting in optimized resource management and 4
                branches of development being simultaneously maintained
              </li>
            </ul>
          </ExperienceItem>
          <ExperienceItem
            title=""
            jobTitle="Operations Analyst"
            fromTo="Jan 2009 - Feb 2013"
            where="Metron, Inc., Reston, VA"
          >
            <ul className={ulTailwind.join(" ")}>
              <li className={liTailwind.join(" ")}>
                Provided modeling and simulation analysis and support to all
                phases of DoD acquisition process utilizing Naval Simulation
                System and range of simulation tools and methodologies, where
                contributions significantly informed acquisition decisions
              </li>
            </ul>
          </ExperienceItem>
        </div>
      </Row>
    </Section>
  );
}
