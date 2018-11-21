import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Navigation from './navigation'
import './layout.css'

const AsideLayout = ({ children }) => (
 
    render={data => (
      <div>
        <div style="float:left;width:75%;border:1px solid">
          <Navigation siteTitle={'Spacious'} /> 

          <div style={{
              margin: '0 auto',
              maxWidth: 1400,
              padding: '0px 1.0875rem 1.45rem',
              marginTop: '100px',
            }}
          >
            {children}
          </div>
        <div/>

        <aside style="font-style:italic;
              float:right;width:20%;
              border:1px solid"
        >
            {children}
        </aside>

      </div>
    )}

)

AsideLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AsideLayout
