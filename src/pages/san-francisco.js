import React from 'react'
import { graphql } from 'gatsby' //Link, StaticQuery, 
import Img from 'gatsby-image'

import Layout from '../components/layout'

const SanFrancisco = ({data}) => (
  <Layout>
    <h1>San Francisco</h1>
    <Img fixed={data.allContentfulSpaceList.edges[6].node.entrancePhoto.fixed}/>
  </Layout>
)

export default SanFrancisco


export const query = graphql`
	query {
	  allContentfulSpaceList {
	    edges {
	      node {
	        space
	        city
		    entrancePhoto {
	          fixed(width:400) {
	            src
	            width
	            height
	            srcSet
	          }
		    }
	      }
	    }
	  }
	}

`

