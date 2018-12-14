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
        <html lang="en" />
    </Helmet>
    <h1 className="city">San Francisco</h1>
    <div className='space-list-container'>
      {data.allContentfulSpace.edges.filter(space => space.node.city === 'San Francisco').map(space => { 
        console.log(space)
        return (
          <div key={space.node.id} className='button-container' >
            <Link to={`san-francisco/${space.node.slug}`}>

              <div className='title-box'>
                <h2 className='space-link-title'>{space.node.spaceName}</h2>

                <div> 
                  <a href={space.node.linkHostApp}> Host App</a>
                </div>
                
                

              </div>

              <div className='entrance-photo'> 
                <Img className='entrance-photo' fluid={space.node.heroPhoto.fluid}/>
              </div>      

            </Link>
          </div>
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
        linkHostApp
        linkSlackApp{
          teamId
          channelId
        }
        heroPhoto {
          fluid(maxWidth: 1200, maxHeight: 600) {
            ...GatsbyContentfulFluid
          }
          title
        }
      }
    }
  }
}	`
