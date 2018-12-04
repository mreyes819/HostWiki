import React from 'react';
import Img from "gatsby-image"
 
class AboutPhotos extends React.Component {

  render() {
    return (
      <section >
        {this.props.photos.map(photo => { 
          return (
            <Img className='about-photos'fluid={photo.fluid} key={photo.id}/>
          )
        })}               
      </section>
    )
  }
}


export default AboutPhotos; 