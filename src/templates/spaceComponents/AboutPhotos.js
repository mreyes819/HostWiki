import React from 'react';
import Img from "gatsby-image"
 
class AboutPhotos extends React.Component {

  render() {
    return (
      <div className='about-photos-container'>
        {this.props.photos.map(photo => { 
          return (
            <Img className='about-photos'fluid={photo.fluid} key={photo.id}/>
          )
        })}               
      </div>
    )
  }
}


export default AboutPhotos; 