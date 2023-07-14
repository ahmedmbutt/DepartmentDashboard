import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

const Notification = ({ notif, success }) => {
  return (
    <Grid>
      {success &&
        notif.map((notif) => (
          <Card key={notif._id} sx={{ boxShadow: 3, my: 3 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {new Date(notif.time).toUTCString()}
              </Typography>
              <Typography variant="h5" component="div">
                {notif.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {notif.description}
              </Typography>
              <Typography variant="body2">{notif.descrition}</Typography>
            </CardContent>
          </Card>
        ))}
    </Grid>
  );
};

Notification.propTypes = {
  notif: PropTypes.array,
  success: PropTypes.bool.isRequired,
};

export default Notification;
