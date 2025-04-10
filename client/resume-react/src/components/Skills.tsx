interface SkillsProps {
    skills: Record<string, string[]>;
  }
  
  const Skills = ({ skills }: SkillsProps) => {
    return (
      <div>
        <h2>Skills</h2>
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index}>
            <h3>{category.replace("_", " ").toUpperCase()}</h3>
            <ul>
              {skillList.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default Skills;