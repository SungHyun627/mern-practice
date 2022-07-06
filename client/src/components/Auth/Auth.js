import { useState } from 'react';
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import Input from './Input';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const googleSuccess = (res) => {
    const token = res?.credential;
    const result = jwt_decode(token);
    console.log(token, result);

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      // Redirect
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const googleError = (err) => {
    console.log('Google Sign In was unsuccessful. Try Again Later');
    console.log(err);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? 'text' : 'password'}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <GoogleOAuthProvider clientId="857626413464-cppq3lu688tojd70gjvdn98afdfor8j5.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={googleSuccess}
              onError={googleError}
              className={classes.googleButton}
              width={364}
              theme={'filled_black'}
            />
          </GoogleOAuthProvider>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? 'Already have an account? Sign In'
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
