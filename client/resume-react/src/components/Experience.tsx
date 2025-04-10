interface Job {
    company: string;
    location: string;
    title: string;
    dates: string;
    responsibilities: string[];
  }
  
  interface ExperienceProps {
    experience: Job[];
  }
  
  const Experience = ({ experience }: ExperienceProps) => {
    return (
      <div>
        <h2>Experience</h2>
        {experience.map((job, index) => (
          <div key={index}>
            <h3>
              {job.company} ({job.location})
            </h3>
            <p>
              <strong>{job.title}</strong> - {job.dates}
            </p>
            <ul>
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default Experience;