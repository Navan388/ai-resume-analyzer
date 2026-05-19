function Results({ data }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Results</h2>

      {/* Resume Score */}
      <h3>Resume Score:</h3>
      <div style={{ width: "100%", background: "#ddd", borderRadius: "5px" }}>
        <div
          style={{
            width: `${data.score}%`,
            background: "green",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
            textAlign: "center"
          }}
        >
          {data.score}%
        </div>
      </div>

      {/* Skills */}
      <h3>Skills:</h3>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      {/* Job Matches */}
      <h3>Job Matches:</h3>
      <ul>
        {Object.entries(data.jobMatches).map(([job, score]) => (
          <li key={job}>
            {job}: {(score * 100).toFixed(0)}%
          </li>
        ))}
      </ul>

      {/* Suggestions */}
      <h3>Suggestions:</h3>
      <ul>
        {data.suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      {/* Better Resume Preview */}
      <h3>Resume Preview:</h3>

      <div
        style={{
          background: "#f8f9fa",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          maxHeight: "400px",
          overflowY: "auto",
          whiteSpace: "pre-wrap",
          fontFamily: "monospace",
          lineHeight: "1.6"
        }}
      >
        {data.parsedText}
      </div>
    </div>
  );
}

export default Results;