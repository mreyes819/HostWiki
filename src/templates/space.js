import React from "react"
import { graphql } from "gatsby" // Link, 
import * as PropTypes from "prop-types"
// import Img from "gatsby-image"
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import './space.css'


const propTypes = {
  data: PropTypes.object.isRequired,
}

class SpaceTemplate extends React.Component {
  render() {
    const space = this.props.data.contentfulSpace
    const { spaceName, 
            modules
          } = space
    const info = modules[0]
    const messages = modules[1]
    // any array needs to be a spaceComponent

    console.log(messages.messages)

    return (

      <Layout>
        <Helmet
          title={`Space Guide -  ${spaceName}`}
        >
          <html lang="en" />
        </Helmet>
        <div style={{
            margin: '0 auto',
            maxWidth: 1100,
            padding: '0px 1.0875rem 1.45rem',
            marginTop: '100px',
          }}
        >
          <div>



            <h1 className='space'> {spaceName} </h1>
            <p>{info.phoneNumber}</p>
            <p>{info.description.description}</p>

            <div className='people-container'>
              <h2>People at {spaceName}</h2>
              {info.contacts.map(contact => { 
                return(
                  <div className='person'>
                    <h3>{contact.position}</h3>
                    <p>{contact.name}</p>
                  </div>
                  )
              })}
            </div>
                  




            <div>
              <h2> {spaceName} Social Media </h2>
              {info.socialMediaLinks.map(social => { 
                return(
                  <div>
                    <h3>{social.type}</h3>
                    <p>{social.url}</p>
                  </div>
                  )
              })}
            </div>






          </div>
        </div>  
      </Layout>
    )
  }
}

SpaceTemplate.propTypes = propTypes

export default SpaceTemplate

export const pageQuery = graphql`
query($id: String!){
  contentfulSpace(id: {eq: $id}) {
    id
    spaceName
    modules {
      ... on ContentfulSpaceInformation {
        phoneNumber
        description {
          description
        }
        addresses {
          type
          address {
            lon
            lat
          }
        }
        contacts {
          name
          position
        }
        socialMediaLinks {
          type
          url
        }
      }
      ... on ContentfulSpaceMessages {
        messages {
          title
          timeMilitary
          message {
            message
          }
        }
      }
    }
  }
}


`