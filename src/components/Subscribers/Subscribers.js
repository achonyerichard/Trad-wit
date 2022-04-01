import React from 'react'
import Layout from '../Layout/Layout'
import Table from '../Table'
import Container from "@material-ui/core/Container";

const Subscribers = ({newUserData}) => {
    return (
      <Layout>
        <Container>
          {<Table newUserData={newUserData} />}
        </Container>
      </Layout>
    );
}

export default Subscribers
