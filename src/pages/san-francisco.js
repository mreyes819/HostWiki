import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import './san-francisco.css'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

const SanFrancisco = ({data}) => (
  <Layout>
    <Helmet
        title={`Space Guides - San Francisco`}
      >
        <html lang='en' />
    </Helmet>
    <h1 className='city'>San Francisco</h1>
    <div className='space-list-container'>
      {data.allContentfulSpace.edges.filter(space => space.node.city === 'San Francisco').map(space => { 
        return (
          <Link key={space.node.id} className='button-container' to={`san-francisco/${space.node.slug}`}>

            <div className='title-box'>
              <h1 className='space-link-title'>{space.node.spaceName}</h1>
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

export default SanFrancisco


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
