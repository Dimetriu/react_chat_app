import React, { createContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'red',
    margin: '10vh',
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: 'flex',
  },
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'
  },
  chatWindow: {
    width: '70%',
    height: '300px'
  },
  chatBox: {
    width: '85vw'
  },
  button: {
    width: '15vw'
  }
}));

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const classes = useStyles();

  return (
    <ThemeContext.Provider value={classes}>
      {children}
    </ThemeContext.Provider>
  );
}

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeContext, ThemeProvider, ThemeConsumer }