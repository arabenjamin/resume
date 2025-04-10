interface ContactProps {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  }
  
  const Contact = ({ phone, email, github, linkedin }: ContactProps) => {
    return (
      <div>
        <h2>Contact</h2>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>
          GitHub: <a href={github}>{github}</a>
        </p>
        <p>
          LinkedIn: <a href={linkedin}>{linkedin}</a>
        </p>
      </div>
    );
  };
  
  export default Contact;