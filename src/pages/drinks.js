import React from "react";
import { Link, graphql } from "gatsby";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

import Layout from "../components/layout";
import Seo from "../components/seo";

const DrinkIndex = (props) => {

  const drinks = props.data.allMongodbCloudDrinks.edges;

  return (
    <Layout pageInfo={{pageName: "drinks"}}>
      <Seo title="drinks" />
      <Link to="/"> Home </Link>
      <h1> Drinks </h1>
      <p> These items are programmatically created from data queried from a cloud database</p>
      <Row >
        {
          drinks.map((drink) => (
            <Col key={drink.node.id} xs={6} lg={3}>
              <CardGroup>
                <Card className="recipe-card">
                  <Link to={`/drinks/` + drink.node.id}>
                    <img
                      className="img-fluid img-thumbnail"
                      src={drink.node.thumbnail}
                      alt={drink.node.title}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title> {drink.node.title} </Card.Title>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          ))
        }
      </Row>
    </Layout>
  );
}

export default DrinkIndex;

export const drinksQuery = graphql`
  query {
    allMongodbCloudDrinks {
      edges {
        node {
          title
          thumbnail
          id
          glassType
          ingredients
          instructions
        }
      }
    }
  }
`