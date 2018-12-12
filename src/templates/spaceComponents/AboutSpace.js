import React from 'react';
import AboutPhotos from './AboutPhotos';
import AboutAddress from './Address';


class AboutSpace extends React.Component {

  render() {
    return (
      <article>
        <AboutPhotos photos={this.props.space.stockPhotos} />  


        <div >
          <section>
            <h2> 
              <span id='about-space'></span>
              About {this.props.space.spaceName} 
            </h2>
          </section>


          <section>
            <div className='sub-section'>
              <h3> Description </h3>
              <p>{this.props.space.aboutSpace.description.description}</p>
            </div>
          </section>



          <section>
            <div>
              <AboutAddress addresses={this.props.space.aboutSpace.addresses} /> 
            </div>
          </section>
        </div>
      </article>
    )
  }
}


export default AboutSpace; 