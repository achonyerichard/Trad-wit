import React from 'react'
import { useState } from 'react';
import { Container, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    border: "1px solid white",
    color: "secondary",
  },
  text: {
    marginTop: "2rem",
    margin: "auto",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  form: {
    maxWidth: "100%",
    // display: 'flex',
    margin: "auto",
    color: "secondary",
    border: " 5px white",
  },
  btn: {
    margin: "auto",
  },
});


const Form = (props) => {
    const classes = useStyles();


     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [nameError, setNameError] = useState(false);
     const [emailError, setEmailError] = useState(false);

     const handleSubmit = (e) => {
       e.preventDefault();
       setNameError(false);
       setEmailError(false);

       if (!name) setNameError(true);
       if (!email) setEmailError(true);

       if (name && email) {
         console.log("sent");
         const val = {
           name,
           email,
         };
         props.func(val);
         const clearState = () => {
           setName("");
           setEmail("");
         };
         clearState();
       }

       
     };

    return (
      <div>
        <Container className={classes.blog}>
          <Typography variant="h6" component="h2" className={classes.text}>
            Subscribe to our website to get amazing offers and newsletters
          </Typography>
          <form
            noValidate
            autoComplete="off"
            action="submit"
            className={classes.form}
            onSubmit={handleSubmit}
            color="secondary"
          >
            <TextField
              label="Name"
              InputLabelProps={{ className: "input_label" }}
              InputProps={{ className: "text" }}
              color="secondary"
              type="email"
              variant="filled"
              className={classes.field}
              fullWidth
              required
              onChange={(e) => setName(e.target.value)}
              error={nameError}
            />
            <TextField
              label="Email"
              InputLabelProps={{ className: "input_label" }}
              InputProps={{ className: "text" }}
              color="secondary"
              variant="filled"
              className={classes.field}
              fullWidth
              required
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="btn"
            >
              Subscribe
            </Button>
          </form>
        </Container>
      </div>
    );
}

export default Form
