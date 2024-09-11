import SubSection from "./Subsection";
import ResumeItem from "./ResumeItem";
import SkillSet from "./SkillSet";

export default function Skills() {
  return (
    <SubSection id="skills" title="Skills">
      <ResumeItem>
        <SkillSet
          skillTitle="Languages"
          skills={[
            "JavaScript",
            "TypeScript",
            "Solidity",
            "Python",
            "Java",
            "R",
            "MatLab",
          ]}
        >
          {""}
        </SkillSet>
        <SkillSet
          skillTitle="Environments"
          skills={["Node", "Deno", "JRM", "Web3"]}
        >
          {""}
        </SkillSet>
        <SkillSet
          skillTitle="Frameworks"
          skills={["React", "Express", "Fresh"]}
        >
          {""}
        </SkillSet>
        <SkillSet
          skillTitle="Databases"
          skills={["PostgreSQL", "Supabase", "Deno-KV"]}
        >
          {""}
        </SkillSet>
        <SkillSet skillTitle="DevOps" skills={["Docker", "AWS", "Git"]}>
          {""}
        </SkillSet>
        <SkillSet
          skillTitle="Testing"
          skills={["Jest", "Cypress", "Playwright", "Postman", "jUnit"]}
        >
          {""}
        </SkillSet>
        <SkillSet
          skillTitle="Front End"
          skills={[
            "HTML",
            "CSS",
            "Material UI",
            "Tailwind",
            "Bootstrap",
            "Daisy UI",
            "Figma",
          ]}
        >
          {""}
        </SkillSet>
        <SkillSet
          skillTitle="Team/Human"
          skills={["Agile", "Scrum", "Jira", "Azure DevOps"]}
        >
          {""}
        </SkillSet>
      </ResumeItem>
    </SubSection>
  );
}
