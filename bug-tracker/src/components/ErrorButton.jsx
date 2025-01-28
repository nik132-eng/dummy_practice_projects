import React from 'react';

function ErrorButton() {
  const triggerError = () => {
    throw new Error('Test error for Sentry!');
  };

  return (
    <button
      onClick={triggerError}
      className="bg-red-500 text-white p-2 rounded mb-8"
    >
      Trigger Error
    </button>
  );
}

export default ErrorButton;