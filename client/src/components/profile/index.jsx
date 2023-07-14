import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.global.user);

  return (
    <TableContainer component={Paper}>
      <Typography variant="h2">PERSONAL INFORMATION</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>CMS ID</TableCell>
            <TableCell>{user.id}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Education
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Institution</TableCell>
            <TableCell>{user.institution}</TableCell>
            <TableCell>Career</TableCell>
            <TableCell>{user.career}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Program</TableCell>
            <TableCell>{user.program}</TableCell>
            <TableCell>Current Semester</TableCell>
            <TableCell>{user.semester}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Contact
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>{user.phone}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Address
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>House No.</TableCell>
            <TableCell>{user.address.house}</TableCell>
            <TableCell>Street No.</TableCell>
            <TableCell>{user.address.street}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Area</TableCell>
            <TableCell>{user.address.area}</TableCell>
            <TableCell>City</TableCell>
            <TableCell>{user.address.city}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Profile;
