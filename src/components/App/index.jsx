import React, { lazy, Suspense } from 'react';
import '../../css/App.css';
// import { Facebook } from 'react-content-loader';
import ContentLoader from 'react-content-loader';

export default function App() {
  return (
    <main className="App">
      <Suspense fallback={AppLoader}>
        <Dashboard />
      </Suspense>
    </main>
  );
}

const AppLoader = (
  <ContentLoader
    height={200}
    width={500}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="4" ry="4" width="500" height="20" />
    <rect x="100" y="25" rx="4" ry="4" width="300" height="15" />
    <rect x="0" y="55" rx="4" ry="4" width="500" height="75" />
  </ContentLoader>
);

const Dashboard = lazy(() => import('../Dashboard'));