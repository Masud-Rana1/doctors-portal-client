import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert, AlertTitle } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImg from "../../../images/login.png";
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, login,isLoading, authError, signInWithGoogle,} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
    }
  const handleLoginSubmit = (e) => {
      login(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history)
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{mt:10}} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
            sx={{width:"75%", m:1}}
              id="standard-basic"
              label="Your Email"
              type="email"
              name="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <TextField
            sx={{width:"75%", m:1}}
              id="standard-basic"
              label="Your Password"
              name="password"
              onBlur={handleOnChange}
              type="password"
              variant="standard"
            />
            <Button sx={{width:"75%", m:1}}
            type="submit" variant="contained">Login</Button>
            <NavLink to='/register' style={{textDecoration: 'none'}}><Button variant="text">New User? Please Register</Button></NavLink>
            {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  User logged in — <strong>Successfully!</strong>
</Alert>}
{authError && <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  {authError}<strong>check it out!</strong>
</Alert>}
          </form>
          <p>---------------</p>
          <Button onClick={handleGoogleSignIn} variant="contained">Google Sign-In</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={loginImg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
