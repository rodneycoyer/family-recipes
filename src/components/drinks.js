import React from "react";
import { Link, graphql } from "gatsby";
import { Col, Row } from "react-bootstrap";
import Layout from "./layout";

const DrinkPost = (props) => {
  const drink = props.data.mongodbCloudDrinks;

  return (
    <Layout>
      <Link to="/drinks"> Back </Link>
      <h1> {drink.title} </h1>
      <Row>
        <Col>
          <img src={drink.thumbnail} alt={drink.title} className="w-75" />
        </Col>
        <Col>
          <h3>Glass-Type</h3>
          {drink.glassType}
          <h3>ingredients</h3>
          {drink.ingredients}
          <h3>instructions</h3>
          {drink.instructions}
        </Col>
      </Row>
    </Layout>
  );
}

export default DrinkPost;

export const DrinkPostQuery = graphql`
  query ($id: String) {
    mongodbCloudDrinks(id: {eq: $id}) {
      id
      title
      thumbnail
      glassType
      ingredients
      instructions
    }
  }
`