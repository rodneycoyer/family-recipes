// create pages programmatically from cloud DB.
const path = require('path');
exports.createPages = async ({ graphql, actions }) => {
  const pageTemplate = path.resolve('./src/components/drinks.js');
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMongodbCloudDrinks {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);
  result.data.allMongodbCloudDrinks.edges.forEach(edge => {
    createPage({
      path: `/drinks/${edge.node.id}/`,
      component: pageTemplate,
      context: {
        id: edge.node.id
      }
    });
  });
};