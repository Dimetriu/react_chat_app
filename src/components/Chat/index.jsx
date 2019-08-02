import React, { lazy, Suspense } from 'react';
import { Facebook } from 'react-content-loader';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

export default function Chat({ 
  flex,
  topicsWindow,
  chatWindow, 
}) {
  return (
    <>
      <section className={flex}>
        <Suspense fallback={topicsWindowLoader}>
          <TopicsWindow />
        </Suspense>
        <div className={chatWindow}>

        </div>
      </section>

      <section className={flex}>
        
      </section>
    </>
  );   
}

// LOADERS
const topicsWindowLoader = <Facebook />;

// COMPONENTS
const TopicsWindow = lazy(() => import('../Chat/TopicsWindow'));