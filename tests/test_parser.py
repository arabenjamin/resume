import pytest
import os
from app.parser import Parser
from app.resume_model import Resume




def test_parser_init(mock_json_file):
    with pytest.raises(ValueError):
        parser = Parser()

    parser = Parser(json_path=str(mock_json_file))
    assert parser is not None
    assert isinstance(parser, Parser)
    assert parser.data is not None
    assert parser.resume is not None

def test_load_json(mock_json_file):
    parser = Parser(json_path=str(mock_json_file))
    assert isinstance(parser.resume, Resume)
    assert isinstance(parser.data, Resume)
    assert parser.resume.name == 'Rick Sanchez'
    assert parser.resume.contact.website  == "rickandmortyadventures.com"

def test_get_markdown(mock_json_file):
    file_path = str(mock_json_file)
    parser = Parser(json_path=file_path)
    parser.get_markdown()
    assert isinstance(parser.resume, Resume)
    assert os.path.exists(file_path)

def test_get_markdown_saves_to_docs(mock_json_file):
    file_path = str(mock_json_file)
    parser = Parser(json_path=file_path)
    parser.get_markdown()
    assert os.path.exists("./docs/index.md")
    with open("./docs/index.md", 'r') as f:
        content = f.read()
        assert "## Summary" in content
        assert "## Objective" in content
        assert "## Experience" in content
        assert "## Skills" in content
    os.remove("./docs/index.md")

def test_get_word_doc(mock_json_file):
    file_path = str(mock_json_file)
    parser = Parser(json_path=file_path)
    parser.get_word_doc()
    assert os.path.exists("./docs/resume.docx")
    os.remove("./docs/resume.docx")


def test_get_pdf(mock_json_file):
    file_path = str(mock_json_file)
    parser = Parser(json_path=file_path)
    parser.get_pdf()
    assert os.path.exists("./docs/resume.pdf")
    os.remove("./docs/resume.pdf")