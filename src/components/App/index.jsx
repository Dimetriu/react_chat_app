import React, { lazy, Suspense } from 'react';
import '../../css/App.css';
import { AppLoader } from '../loaders';

export default function App() {
  return (
    <main className="App">
      <Suspense fallback={AppLoader}>
        <Dashboard />
      </Suspense>
    </main>
  );
}

const Dashboard = lazy(() => import('../Dashboard'));