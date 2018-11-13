import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const SpaceListItem = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: {eq: "Spacious_MillingRoom1080.jpeg"}) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default SpaceListItem
