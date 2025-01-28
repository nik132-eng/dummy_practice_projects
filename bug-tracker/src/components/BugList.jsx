import React, { useState, useEffect } from 'react';
import { fetchBugs } from '../services/api';

function BugList() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const loadBugs = async () => {
      const data = await fetchBugs();
      setBugs(data);
    };
    loadBugs();
  }, []);

  return (
    <div className="grid gap-4">
      {bugs.map(bug => (
        <div key={bug.id} className="border p-4 rounded">
          <h3 className="font-bold">{bug.title}</h3>
          <p>{bug.description}</p>
          <span className={`inline-block px-2 py-1 rounded ${
            bug.severity === 'high' ? 'bg-red-200' :
            bug.severity === 'medium' ? 'bg-yellow-200' :
            'bg-green-200'
          }`}>
            {bug.severity}
          </span>
        </div>
      ))}
    </div>
  );
}

export default BugList;