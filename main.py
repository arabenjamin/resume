from app.parser import Parser



if __name__ == "__main__":

    JSON_PATH = 'resume.json'
    print("Converting resume to Markdown...")
    parser = Parser(json_path=JSON_PATH)
    md_resume = parser.get_markdown()
    print("Conversion complete!")