interface SummaryProps {
    summary: string;
  }
  
  const Summary = ({ summary }: SummaryProps) => {
    return (
      <div>
        <h2>Summary</h2>
        <p>{summary}</p>
      </div>
    );
  };
  
  export default Summary;