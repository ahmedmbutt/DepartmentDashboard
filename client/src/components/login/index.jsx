import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserMutation } from "state/api";
import { setIsLoggedIn, setRole, setUser } from "state";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [getUser] = useGetUserMutation();

  const [error, setError] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
    role: "",
  });
  const isLoggedIn = useSelector((state) => state.global.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) return navigate("/dashboard");
  }, [isLoggedIn]);

  const handleInput = (e) =>
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(loginInfo)
      .unwrap()
      .then((user) => {
        dispatch(setIsLoggedIn());
        dispatch(setRole(user.role));
        dispatch(setUser(user));
      })
      .catch(() => setError(true));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <RadioGroup row name="role" onClick={handleInput}>
            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
            <FormControlLabel
              value="faculty"
              control={<Radio />}
              label="Faculty"
            />
            <FormControlLabel
              value="student"
              control={<Radio />}
              label="Student"
            />
          </RadioGroup>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleInput}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInput}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      {error && (
        <Alert severity="error">Invalid Login, Please try again!</Alert>
      )}
    </Container>
  );
};

export default Login;
