import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

export default function BasicTable({ newUserData }) {
  const classes = useStyles();

  console.log(newUserData);

 

  return (
    <TableContainer className="table" component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newUserData.map((user) => (
            <TableRow align="left" key={user.id}>
              <TableCell align="left"  component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="left">{user.name}</TableCell>
              <TableCell align="left">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
