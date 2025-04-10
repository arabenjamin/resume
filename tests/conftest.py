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
        "linkedin": "https://www.linkedin.com/in/rick-sanchez/",
        "website": "rickandmortyadventures.com",
        },
        "summary": "A brilliant, albeit highly eccentric and often inebriated, \
            scientist with unparalleled intellect and expertise across countless \
            scientific disciplines and dimensions. Proven ability to invent groundbreaking (and often dangerous) \
            technologies, solve complex interdimensional problems (usually of my own making), \
            and navigate hostile environments with remarkable (if reckless) efficiency. \
            Seeking opportunities that leverage my unique skillset, \
            disregard of conventional ethical boundaries, \
            and offer access to advanced resources and copious amounts of high-quality booze. \nNot a team player.",
        "objective": "Get that Szechuan Sauce",
        "experience": [
            {
                "company": "Independant Contractor/Consultant",
                "location": "Remote",
                "title": "Highly Accomplished (and Occasionally Wanted) Independent Scientist, Inventor, and Interdimensional Traveler",
                "dates": "January 2010 - Present",
                "summary": "",
                "responsibilities": [
                    "Design, engineer, build, execute and deploy high stake hiests and other \
                    con-jobs, resulting in the aquisition of rare, exotic and or highly volitile resources, energy or drugs.", 
                    "Recruit, Co-op, conjure, out-right lie, deceive or otherwise trick both internal and external\
                    clients and stakeholders",
                    "Collaberated with Dinosaurs to Seal the temporal rift in the Central Finite Curve",
                    "Overseeing the reconstrution of the citedel",
                    "Expert in Avoiding Responsibility."
                    
                ]
            },
            {
                "company": "Gadget Lab Adventures, inc",
                "location": "Bothell, Wa ( Remote )",
                "title": "Engineering Solutions Director",
                "dates": "February 1995 - June 2007",
                "summary": "I was a one man show, who carrried ",
                "responsibilities": [
                    "Microverse Battery: Creation of self-sustaining universes within smaller universes to power technology."
                    "Updated portal gun protype to interface with upgraded pronton pack",
                    "Reversed engineered Aperture Labs Portal Gun with rifle form factor, to deliver a single handed, pistol like form factor",
                    "Reconstructed the Proton Pack to intergrate both the Arc Reactor, and the Flux Capacitor",
                    "Developed the space travel machine from spare parts in the company garage",    
                ]
            },
            {
                "company": "Aperture Science Labs",
                "location": "Waterford, Mi",
                "title": "Senior Engineer",
                "dates": "May 1986 - February 1995",
                "summary": "Too drunk to remember",
                "responsibilities":[
                    "Time Travel Stuff",
                    "Scfi Stuff"
                ]

            },
        ],
        "skills": {
            "languages": [
                "Fluency in numerous alien languages and a unique (and often offensive) approach to interstellar relations.",
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
