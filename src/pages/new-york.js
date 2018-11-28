 import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import './san-francisco.css'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const NewYork = ({data}) => (
  <Layout>
    <Helmet
      title={`Space Guides - New York`}
    >
      <html lang="en" />
    </Helmet>
    <h1 className="city">New York</h1>
    <div className='space-list-container'>
      {data.allContentfulSpace.edges.filter(space => space.node.city === 'New York').map(space => { 
        return (
          <Link key={space.node.id} className='button-container' to={`new-york/${space.node.slug}`}>

            <div className='title-box'>
              <h2 className='space-link-title'>{space.node.spaceName}</h2>
            </div>

            <div className='entrance-photo'> 
              <Img className='entrance-photo' fluid={space.node.heroPhoto.fluid}/>
            </div>      

            <div className='container-shadow'> 
            </div>

          </Link>
        )
      })}
    </div>
  </Layout>
)

export default NewYork


export const query = graphql`
  query {
  allContentfulSpace {
    edges {
      node {
        spaceName
        city
        slug
        id
        heroPhoto {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyContentfulFluid
          }
          title
        }
      }
    }
  }
} `