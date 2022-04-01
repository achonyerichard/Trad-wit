import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {},
  menuItem: {
    marginRight: theme.spacing(3),
    textDecoration: "none",
    color: "inherit",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className="nav" position="static" color="primary" elevation={0}>
        <Toolbar>
          <Box component="span" className={classes.box}>
            <Typography variant="h6" className={classes.title}>
              Trad-Wit
            </Typography>
            < AccountBalanceOutlinedIcon className={classes.icon} />
          </Box>

          <Link className={classes.menuItem} color="inherit" to="/">
            Home
          </Link>
          <Link className={classes.menuItem} color="inherit" to="/subscribers">
            Subscribers
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
