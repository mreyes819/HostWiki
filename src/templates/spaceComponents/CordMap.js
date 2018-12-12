import React from 'react';
import Img from "gatsby-image";

class CordMap extends React.Component {

  render() {
    return (
      <section>
        <h2> 
          <span id='cord-map'></span>
          Cord Map 
        </h2>
        <div className='system'>
          <Img fluid={this.props.cordMap.fluid} className='system-photo' />
        </div>
      </section> 
    )
  }
}


export default CordMap; 