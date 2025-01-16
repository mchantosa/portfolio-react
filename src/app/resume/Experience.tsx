import SubSection from "./Subsection";
import ExperienceItem from "./ExperienceItem";
import { aTailwind, ulTailwind, liTailwind } from "./style";

export default function Experience() {
  return (
    <SubSection id="experience" title="ProfessionalExperience">
      <ExperienceItem
        jobTitle="Software Engineer"
        fromTo="May 2023 - Present"
        where="Freelance, Seattle, WA"
      >
        <ul className={ulTailwind.join(" ")}>
          <li className={liTailwind.join(" ")}>
            Migrated customer&apos;s website from WordPress to NextJS.
          </li>
          <li className={liTailwind.join(" ")}>
            Created{" "}
            <a
              href="https://crowdfunding-megan.chantosa.com/"
              target="_blank"
              className={aTailwind.join(" ")}
            >
              Crowdfund
            </a>
            , a decentralized application for crowdfunding. Built with NextJS,
            MaterialUI, Solidity, and Hardhat, supporting multiple Ethereum
            networks.
          </li>
          <li className={liTailwind.join(" ")}>
            Delivered a prototype of smart contract application using Figma.
          </li>
          <li className={liTailwind.join(" ")}>
            Manage, maintain, and improve multiple WordPress websites for
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
            , a word guessing game strongly resembling Wordle. Built as a single
            page vanilla HTML/CSS/JavaScript, &quot;gist-able&quot; application.
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
        jobTitle="Software Developer - AI Trainer"
        fromTo="Mar 2024 - Jul2024"
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
            Grew some mushrooms (oyster, lion&apos;s main, shiitake).
          </li>
        </ul>
      </ExperienceItem>
      <ExperienceItem
        jobTitle="Software Development Engineer Test (SDET)"
        fromTo="Aug 2013 - May 2016"
        where="Cortana Corporation, Falls Church, VA"
      >
        <ul className={ulTailwind.join(" ")}>
          <li className={liTailwind.join(" ")}>
            Implemented and managed agile testing methodologies for
            Nonconventional Exploitation Factors Data System (NEFDS) with JIRA
            ensuring consistent delivery of high-quality software through
            rigorous testing
          </li>
          <li className={liTailwind.join(" ")}>
            Pioneered integration of Java and Selenium to automate testing
            processes using Java and Selenium resulting in 100% improvement of
            automated test capability
          </li>
          <li className={liTailwind.join(" ")}>
            Developed comprehensive QA deliverables utilizing Microsoft Word
            serving as essential documentation for user acceptance testing (UAT)
            and enabling software allowlisting on restricted networks
          </li>
          <li className={liTailwind.join(" ")}>
            Conducted diverse testing activities, including manual, smoke,
            integration, regression, end-to-end, and cross-platform testing
            utilizing Java, Selenium, and Excel resulting in increased test
            frequency by 500% and improved scenario coverage by factor of 12,
            leading to delivery of near bug-free software within deadlines
          </li>
        </ul>
      </ExperienceItem>
      <ExperienceItem
        jobTitle="Business Analyst/QA Manager"
        fromTo="Jun 2014 - Sep 2015"
        where="1901 Group, Reston, VA"
      >
        <ul className={ulTailwind.join(" ")}>
          <li className={liTailwind.join(" ")}>
            Successfully served as scrum master, effectively clearing roadblocks
            for team of 6 developers, 3 QA resources, and IT support across 4
            branches of development
          </li>
          <li className={liTailwind.join(" ")}>
            Managed team activities in Microsoft Agile DevOps resulting in 100%
            improved customer satisfaction
          </li>
          <li className={liTailwind.join(" ")}>
            Gathered requirements and oversaw testing efforts for all software
            development initiatives, employing Agile DevOps best practices
            resulting in optimized resource management and 4 branches of
            development being simultaneously maintained
          </li>
        </ul>
      </ExperienceItem>
      <ExperienceItem
        jobTitle="Operations Analyst"
        fromTo="Jan 2009 - Feb 2013"
        where="Metron, Inc., Reston, VA"
      >
        <ul className={ulTailwind.join(" ")}>
          <li className={liTailwind.join(" ")}>
            Provided modeling and simulation analysis and support to all phases
            of DoD acquisition process utilizing Naval Simulation System and
            range of simulation tools and methodologies, where contributions
            significantly informed acquisition decisions
          </li>
        </ul>
      </ExperienceItem>
    </SubSection>
  );
}
