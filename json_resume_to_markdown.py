import json
import yaml


def convert_json_to_yaml(json_filepath, yaml_filepath):
    with open(json_filepath, 'r') as json_file:
        resume_data = json.load(json_file)
    
    with open(yaml_filepath, 'w') as yaml_file:
        yaml.dump(resume_data, yaml_file, default_flow_style=False)


def json_to_markdown(json_file, markdown_file):
    with open(json_file, 'r') as f:
        resume = json.load(f)
    
    with open(markdown_file, 'w') as f:
        f.write(f"# {resume['name']}\n\n")
        f.write(f"**Phone:** {resume['contact']['phone']}  \n")
        f.write(f"**Email:** {resume['contact']['email']}  \n")
        f.write(f"**GitHub:** [{resume['contact']['github']}]({resume['contact']['github']})  \n")
        f.write(f"**LinkedIn:** [{resume['contact']['linkedin']}]({resume['contact']['linkedin']})\n\n")
        
        f.write("## Objective\n\n")
        f.write(f"{resume['objective']}\n\n")
        
        f.write("## Experience\n\n")
        for job in resume['experience']:

            f.write(f"### {job['company']} ({job['location']})\n")
            f.write(f"**{job['title']}**\n")
            f.write(f"*{job['dates']}*\n\n")
            for responsibility in job['responsibilities']:
                f.write(f"- {responsibility}\n")
            f.write("\n")
        
        f.write("## Skills\n\n")
        for skill_category, skills in resume['skills'].items():
            f.write(f"### {skill_category.capitalize()}\n")
            for skill in skills:
                f.write(f"- {skill}\n")
            f.write("\n")

if __name__ == "__main__":
    JSON_PATH = '/home/ara/resume/resume.json'
    MARKDOWN_PATH = '/home/ara/resume/resume.md'
    YAML_PATH = '/home/ara/resume/resume.yaml'
    print("Converting resume to Markdown...")
    json_to_markdown(JSON_PATH, MARKDOWN_PATH)
    convert_json_to_yaml(JSON_PATH, YAML_PATH)
    print("Conversion complete!")