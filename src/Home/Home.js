import React from "react";
import Layout from "../components/Layout/Layout";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Form from "../components/Form";
import Card from "../components/Card"

const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
  },
}));
const Home = ({userData,setUserData}) => {
  const classes = useStyles();
  return (
    <>
      <Layout>
        <Container className="main_text">
          <Box className={classes.box}>
            <Typography variant="h1">Welcome to Trade-Wit</Typography>
          </Box>

          <Typography variant="body1">
            The number one crypto trading website across Africa and the world...
          </Typography>
        </Container>
        <Container>
          <Typography variant="h3" gutterBottom >
            <Box textAlign="center" m={1}>
              Our Services
            </Box>
          </Typography>
          <Card />
        </Container>
        <Container>
          <Form setUserData={setUserData} userData ={userData} />
        </Container>
      </Layout>
    </>
  );
};

export default Home;
