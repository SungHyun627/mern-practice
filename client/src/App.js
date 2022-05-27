import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" algin="center">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </AppBar>
      </Container>
    </div>
  );
};

export default App;
