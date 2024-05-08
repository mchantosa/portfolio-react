import SubSection from "./Subsection";
import ResumeItem from "./ResumeItem";
import SkillSet from "./SkillSet";

export default function Skills() {
  return (
    <SubSection id="skills" title="Skills">
      <ResumeItem>
        <SkillSet
          skillTitle="Languages"
          skills={["JavaScript", "TypeScript", "Python", "Java", "R", "MatLab"]}
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
    </SubSection>
  );
}
