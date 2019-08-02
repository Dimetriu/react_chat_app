import React, { lazy, Suspense, useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import { Facebook } from 'react-content-loader';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

export default function Chat() {
  const classes = useContext(ThemeContext);

  return (
    <>
      <section className={classes.flex}>
        <Suspense fallback={topicsWindowLoader}>
          <TopicsWindow variant={classes.topicsWindow} />
        </Suspense>
        <div className={classes.chatWindow}>

        </div>
      </section>

      <section className={classes.flex}>
        
      </section>
    </>
  );   
}

// LOADERS
const topicsWindowLoader = <Facebook />;

// COMPONENTS
const TopicsWindow = lazy(() => import('../Chat/TopicsWindow'));