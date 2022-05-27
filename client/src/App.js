import React from 'react';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core';
import memories from './images/memories.png';
import useStyles from './styles';
import Posts from './components/Posts/Posts';

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
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
