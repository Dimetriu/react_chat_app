import React, { 
  lazy, 
  Suspense,
  useContext
} from 'react';
import { ThemeContext } from '../../ThemeContext';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export default function Dashboard() {
  const classes = useContext(ThemeContext);

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" component="h4">
        Chat App
      </Typography>
      <Typography variant="h5" component="h5">
        Topic placeholder.
      </Typography>
      
      <Suspense fallback={<p>yay</p>}>
        <Chat />
      </Suspense>
    </Paper>
  );
}

const Chat = lazy(() => import('../Chat'));