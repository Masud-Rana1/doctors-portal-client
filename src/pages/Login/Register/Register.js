import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert, AlertTitle } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
  const {user, registerUser, isLoading,authError} = useAuth();
    const handleOnBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
  const handleLoginSubmit = (e) => {
      if(loginData.password !== loginData.password2){
          alert('Your Password did`t matched');
          return;
      }
      registerUser(loginData.email, loginData.password,loginData.name, history);
    e.preventDefault();
  };
    return (
        <Container>
      <Grid container spacing={2}>
        <Grid sx={{mt:10}} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
          {!isLoading && <form onSubmit={handleLoginSubmit}>
            <TextField
            sx={{width:"75%", m:1}}
              id="standard-basic"
              label="Your Email"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
            sx={{width:"75%", m:1}}
              id="standard-basic"
              label="Your name"
              name="name"
              onBlur={handleOnBlur}
              variant="standard"
            />
            <TextField
            sx={{width:"75%", m:1}}
              id="standard-basic"
              label="Your Password"
              name="password"
              onBlur={handleOnBlur}
              type="password"
              variant="standard"
            />
            <TextField
            sx={{width:"75%", m:1}}
              id="standard-basic"
              label="Re-Type Your Password"
              name="password2"
              onBlur={handleOnBlur}
              type="password"
              variant="standard"
            />
            <Button sx={{width:"75%", m:1}}
            type="submit" variant="contained">Register</Button>
            <NavLink to='/login' style={{textDecoration: 'none'}}><Button variant="text">Already Registed? Please Login</Button></NavLink>
          </form>}
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">
  <AlertTitle>Success</AlertTitle>
  User created — <strong>Successfully!</strong>
</Alert>}
{authError && <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  {authError}<strong>check it out!</strong>
</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default Register;