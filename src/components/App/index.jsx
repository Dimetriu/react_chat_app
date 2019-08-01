import React, { lazy, Suspense } from 'react';
import '../../css/App.css';

export default function App() {
  return (
    <main className="App">
      <Suspense fallback={loader}>
        <Dashboard />
      </Suspense>
    </main>
  );
}

const loader = <p>Loading...</p>;

const Dashboard = lazy(() => import('../Dashboard'));