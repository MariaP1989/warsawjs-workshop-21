import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";

const Layout = props => {
  return (
    <div>
      <Container>
        <Segment basic vertical>
          <Grid divided stackable reversed={"mobile"}>
            <Grid.Column width={12}>{props.content}</Grid.Column>
            <Grid.Column width={4}>{props.sidebar}</Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
};


export default (Layout);
