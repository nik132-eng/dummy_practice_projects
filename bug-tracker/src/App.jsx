import React from 'react';
import * as Sentry from "@sentry/react";
import BugList from './components/BugList';
import BugForm from './components/BugForm';
import ErrorButton from './components/ErrorButton';

const SentryErrorBoundary = Sentry.ErrorBoundary;

function App() {
  return (
    <SentryErrorBoundary fallback={<p>An error has occurred</p>}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Bug Tracker</h1>
        <BugForm />
        <ErrorButton />
        <BugList />
      </div>
    </SentryErrorBoundary>
  );
}

export default App;