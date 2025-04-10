import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Contact from './components/Contact';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Skills from './components/Skills';

/*
const resume = {
  name: "Ara Sheperdigian",
  contact: {
    phone: "(248) 238-8615",
    email: "ara.benjamin@gmail.com",
    github: "https://github.com/arabenjamin",
    linkedin: "https://www.linkedin.com/in/ara-sheperdigian-a751a418",
  },
  summary:
    "Energetic, innovative and competent software developer and engineer offering a rich mixture of experience and success in a variety of work environments.",
  experience: [
    {
      company: "HP",
      location: "Boise, ID (Remote via Experis)",
      title: "Software Engineer",
      dates: "May 2021 - February 2023",
      responsibilities: [
        "Worked as a software engineer in R&D on the Color & Imaging team.",
        "Built a tiny-URL microservice in Python using Django.",
      ],
    },
    // Add more jobs here
  ],
  skills: {
    languages: ["Python", "Golang", "JavaScript", "C++", "Rust"],
    web_frameworks: ["React", "Vue", "Django", "Flask"],
  },
};
*/
interface Resume {
  name: string;
  contact: {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  };
  summary: string;
  experience: {
    company: string;
    location: string;
    title: string;
    dates: string;
    responsibilities: string[];
  }[];
  skills: Record<string, string[]>;
}

function App() {
  const [count, setCount] = useState(0)
  const [resume, setResume] = useState<Resume | null>(null);

  useEffect(() => {
    // Fetch the resume.json file
    fetch('/resume.json')
      .then((response) => response.json())
      .then((data) => setResume(data))
      .catch((error) => console.error('Error fetching resume:', error));
  }, []);

  if (!resume) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{resume.name}'s Resume</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="App">
        <Contact {...resume.contact} />
        <Summary summary={resume.summary} />
        <Experience experience={resume.experience} />
      <Skills skills={resume.skills} />
    </div>
    </>
  )
}

export default App
