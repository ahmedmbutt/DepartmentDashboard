import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Notification from "./notification";
import {
  useGetNotificationQuery,
  usePostNotificationMutation,
} from "state/api";

const Dashboard = () => {
  const user = useSelector((state) => state.global.user);
  const [postNotification] = usePostNotificationMutation();

  const [message, setMessage] = useState({ title: "", description: "" });

  const { data, isSuccess, refetch } = useGetNotificationQuery();

  const handleInput = (e) =>
    setMessage({ ...message, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ ...message, title: "", description: "" });
    await postNotification(message);
    refetch();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h1">Hello, {user.name || "World"}!</Typography>
      {user.role === "admin" && (
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoFocus
              value={message.title}
              onChange={handleInput}
            />
            <TextField
              margin="normal"
              fullWidth
              name="description"
              label="Description"
              type="description"
              id="description"
              multiline
              rows={4}
              value={message.description}
              onChange={handleInput}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Post &nbsp; <Send />
            </Button>
          </Box>
        </Box>
      )}
      <Grid sx={{ my: 2 }}>
        <Typography align="center" color={"green"} variant="h4">
          Announcements
        </Typography>
        <Notification notif={data} success={isSuccess} />
        <Typography>&nbsp;</Typography>
      </Grid>
    </Container>
  );
};

export default Dashboard;
