import React from 'react';
import Img from "gatsby-image"

class TitleTextPhoto extends React.Component { 
  render() { 
    let description = null
    if(this.props.data.description) { 
      description = <div dangerouslySetInnerHTML={{ __html: this.props.data.description.childMarkdownRemark.html}} style={{ padding: '1em'}}/>
    }
    return(
      <div className='title-text-photo' key={this.props.data.id}>
        {description}
        <Img fluid={this.props.data.photo.fluid} />
      </div>
    )
  }
}

export default TitleTextPhoto;
