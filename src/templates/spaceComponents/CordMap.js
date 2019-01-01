import React from 'react';
import Img from "gatsby-image";

class CordMap extends React.Component {

  render() {
    return (
      <section className='sub-section'>
        <h2 className='section-component-title-desc'> 
          <span id='cord-map'></span>
          Cord Map 
        </h2>
        <div className='section-component'>
          <Img fluid={this.props.cordMap.fluid} className='system-photo' />
        </div>
      </section> 
    )
  }
}


export default CordMap; 