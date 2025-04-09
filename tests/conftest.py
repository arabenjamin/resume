import pytest
import json
import os


@pytest.fixture
def mock_json_file(tmp_path):


    mock_data = {
        "name": "Rick Sanchez",
        "contact": {
        "phone": "555-555-5555",
        "email": "rick.s@gmail.com",
        "github": "https://github.com/ricksanchez",
        "linkedin": "https://www.linkedin.com/in/rick-sanchez/"
        },
        "objective": "Energetic, innovative and competent business professional offering a rich mixture of experience and success in a variety of work environments. I am looking to put my work experience and my passion for programming and technology to good use to help ensure success for the company or institution that I’ll be a part of.",
        "experience": [
        {
            "company": "Consultant/Contractor",
            "location": "Remote",
            "title": "Freelance Software Engineer",
            "dates": "February 2023 - Present",
            "responsibilities": [
                "Overseeing the Rebuilding of the citedel"
            ]
        },
        {
            "company": "Bell Labs",
            "location": "Boise, ID (Remote via Experis)",
            "title": "Software Engineer",
            "dates": "May 2021 - February 2023",
            "responsibilities": [
                "Developed The protal gun to create to portals to different universes",
                "Developed the space travel machine from spare parts in the garage",    
                "Develepded Time travel"
            ]
        },
        {
            "company": "Humana Insurance",
            "location": "Louisville, KY (Remote, via Cognizant, via E-Solutions)",
            "title": "Software Engineer",
            "dates": "July 2020 - January 2021 (6 month Contract)",
            "responsibilities": []
        },
    
        ],
        "skills": {
        "languages": [

        ],
        "security": [

        ],
        "web_servers": [

        ],
        "web_frameworks": [

        ],
        "databases": [

        ],
        "os_platform": [

        ],
        "vm_containers_cloud": [

        ],
        "robotics": [

        ],
        "robotics_projects": [

        ]
        }
    }


    with open(tmp_path/"resume.json", "w") as f:
        json.dump(mock_data, f)
    yield tmp_path /"resume.json"

    os.remove(tmp_path/"resume.json")
