import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
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

export default function Chat() {
  const classes = useStyles();

  return (
    <>
      <section className={classes.flex}>
        <div className={classes.topicsWindow}>

        </div>
        <div className={classes.chatWindow}>

        </div>
      </section>

      <section className={classes.flex}>
        
      </section>
    </>
  );   
}