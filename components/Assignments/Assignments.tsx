import React from 'react';
import useAssignments from '../../hooks/firebase/useAssignments';

const Assignments: React.FC = () => {
  const { loading, error, data } = useAssignments();

  return (
    <div>
      <h1>Assignments:</h1>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{`Error: ${error}`}</h4>}
      {data &&
        Object.values(data).map((assignment, index) => (
          <ul key={`assignment-${index}`}>
            <li>{`Filename: ${assignment.filename}`}</li>
            <li>{`Grade: ${assignment.grade}`}</li>
            <li>{`Subject: ${assignment.subject}`}</li>
          </ul>
        ))}
      {!loading && data && data.length === 0 && <h4>No data :(</h4>}
    </div>
  );
};

export default Assignments;
