import React, { lazy, Suspense } from 'react';
import '../../css/App.css';
import { MyLoader } from '../loaders';

export default function App() {
  return (
    <main className="App">
      <Suspense fallback={MyLoader}>
        <Dashboard />
      </Suspense>
    </main>
  );
}

const Dashboard = lazy(() => import('../Dashboard'));