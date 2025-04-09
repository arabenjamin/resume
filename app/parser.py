import json
import logging

from app.resume_model import Resume



class Parser:
    def __init__(self, json_path=None) -> None:
        
        self.json_path = json_path
        if not json_path:
            raise ValueError("JSON path cannot be None")
        
        if not json_path.endswith('resume.json'):
            raise ValueError("File must be a JSON file")
        

        self.data = None
        self.resume = None
        self.__load_json()
        

    def __load_json(self) -> None:
        with open(self.json_path, 'r') as f:
            self.data = json.load(f)
            self.resume = Resume(**self.data)

    def __get_resume(self) -> Resume:
        return self.resume
    
    def get_markdown(self):

        with open("./docs/resume.md", 'w') as f:

            f.write(f"# {self.resume.name}\n\n")
            f.write(f"**Phone:** {self.resume.contact.phone}  \n")
            f.write(f"**Email:** {self.resume.contact.email}  \n")
            f.write(f"**GitHub:** [{self.resume.contact.github}]({self.resume.contact.github})  \n")
            f.write(f"**LinkedIn:** [{self.resume.contact.linkedin}]({self.resume.contact.linkedin})\n\n")
            
            f.write("## Objective\n\n")
            f.write(f"{self.resume.objective}\n\n")
            
            f.write("## Experience\n\n")
            for job in self.resume.experience:
                f.write(f"### {job.company} ({job.location})\n")
                f.write(f"**{job.title}**\n")
                f.write(f"*{job.dates}*\n\n")
                for responsibility in job.responsibilities:
                    f.write(f"- {responsibility}\n")
                f.write("\n")
            
            f.write("## Skills\n\n")
            for skill_category, skills in self.resume.skills.model_dump().items():
                if skills:
                    f.write(f"### {skill_category.capitalize()}\n")
                    for skill in skills:
                        f.write(f"- {skill}\n")
                    f.write("\n")




