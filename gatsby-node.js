// const { createFilePath } = require(`gatsby-source-filesystem`)
const Promise = require(`bluebird`)
const slash = require(`slash`)
const path = require(`path`)


exports.createPages = ({ graphql, actions }) => { 
  const { createPage } = actions;
  return new Promise ((resolve, reject) => { 
    
    // Query Space List
    graphql(
      `{
        allContentfulSpace {
          edges {
            node {
              id
              slug
              city
            }
          }
        }
      }`
    ).then(result => { 
      // Create Space List Pages
      if(result.errors) { 
        reject(result.errors)
      }
      const spaceTemplate = path.resolve(`./src/templates/space.js`)



      result.data.allContentfulSpace.edges.forEach(edge => { 
        let citySlug = edge.node.city.toLowerCase().split(' ').join('-');
        createPage({
          path: `/${citySlug}/${edge.node.slug}/`,
          component: slash(spaceTemplate),
          context: { 
            id: edge.node.id
          }
        })
      })



    })

    resolve();
  })
}