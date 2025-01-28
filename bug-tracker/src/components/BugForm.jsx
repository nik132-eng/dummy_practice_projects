import React, { useState } from 'react';
import { createBug } from '../services/api';

function BugForm() {
  const [bug, setBug] = useState({
    title: '',
    description: '',
    severity: 'low'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBug(bug);
    setBug({ title: '', description: '', severity: 'low' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="grid gap-4">
        <input
          type="text"
          placeholder="Bug title"
          value={bug.title}
          onChange={(e) => setBug({ ...bug, title: e.target.value })}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Bug description"
          value={bug.description}
          onChange={(e) => setBug({ ...bug, description: e.target.value })}
          className="border p-2 rounded"
        />
        <select
          value={bug.severity}
          onChange={(e) => setBug({ ...bug, severity: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Bug
        </button>
      </div>
    </form>
  );
}

export default BugForm;