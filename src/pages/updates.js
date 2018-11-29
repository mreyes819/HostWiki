import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import './san-francisco.css'

const Updates = ({data}) => (

  <Layout> 
    <Helmet title={`Space Updates`}>
      <html lang='en' />
    </Helmet>
    <h1 className="city">Updates </h1>
  </Layout>
  
)


export default Updates; 

export const query = graphql`
query{
  allContentfulSpaceUpdatesEvents{
    edges{
      node{
        title
        date
        space{
          spaceName
          city
        }
        message{
          message
        }
      }
    }
  }
}`

