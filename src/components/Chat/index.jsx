import React, { lazy, Suspense, useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import ContentLoader from 'react-content-loader';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

export default function Chat() {
  const classes = useContext(ThemeContext);

  return (
    <Suspense fallback={contentLoader}>
      <section className={classes.flex}>
        <Window variant={classes.topicsWindow}>
          
        </Window>

        <Window variant={classes.chatWindow}>

        </Window>
      </section>

      <section className={classes.flex}>
        
      </section>
    </Suspense>
  );   
}

const contentLoader = (
  <ContentLoader
    height={300} 
    width={1000}
    speed={1}
  >
    <rect x="0" y="0" rx="5" ry="5" width="40" height="40" />
    <rect x="50" y="10" rx="5" ry="5" width="100" height="13" />
    <rect x="50" y="30" rx="5" ry="5" width="300" height="30" />

    <rect x="500" y="0" rx="5" ry="5" width="40" height="40" />
    <rect x="550" y="10" rx="5" ry="5" width="100" height="13" />
    <rect x="550" y="30" rx="5" ry="5" width="300" height="30" />

    <rect x="0" y="80" rx="5" ry="5" width="40" height="40" />
    <rect x="50" y="90" rx="5" ry="5" width="100" height="13" />
    <rect x="50" y="110" rx="5" ry="5" width="300" height="30" />

    <rect x="500" y="80" rx="5" ry="5" width="40" height="40" />
    <rect x="550" y="90" rx="5" ry="5" width="100" height="13" />
    <rect x="550" y="110" rx="5" ry="5" width="300" height="30" />

    <rect x="0" y="160" rx="5" ry="5" width="40" height="40" />
    <rect x="50" y="170" rx="5" ry="5" width="100" height="13" />
    <rect x="50" y="190" rx="5" ry="5" width="300" height="30" />

    <rect x="500" y="160" rx="5" ry="5" width="40" height="40" />
    <rect x="550" y="170" rx="5" ry="5" width="100" height="13" />
    <rect x="550" y="190" rx="5" ry="5" width="300" height="30" />

    <rect x="0" y="240" rx="5" ry="5" width="40" height="40" />
    <rect x="50" y="250" rx="5" ry="5" width="100" height="13" />
    <rect x="50" y="270" rx="5" ry="5" width="300" height="30" />

    <rect x="500" y="240" rx="5" ry="5" width="40" height="40" />
    <rect x="550" y="250" rx="5" ry="5" width="100" height="13" />
    <rect x="550" y="270" rx="5" ry="5" width="300" height="30" />
  </ContentLoader>
);

const Window = lazy(() => import('./Window'));