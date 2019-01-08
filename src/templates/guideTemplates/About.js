import React from "react"
import Address from '../../components/spaceGuide/Address';
import Img from "gatsby-image"

class AboutSpace extends React.Component {

  render() { 
    return (
      <section id='about' className='system-main'> 
        <h1>{this.props.space}</h1>
        <Img fluid={this.props.hero.fluid} />
        <div dangerouslySetInnerHTML={{ __html: this.props.about.childContentfulSpaceInformationDescriptionTextNode.childMarkdownRemark.html}} style={{ padding: '1em 4em', fontSize: '1.2em'}}/>
        
        <h2 style={{margin:'0'}}><span id="theBasics"></span>The Basics</h2>
        <Address defaultCenter={this.props.about.mainAddress} className='main-address2'/>
        <div className='about-basics'>
          
          <div dangerouslySetInnerHTML=
          {{ __html: this.props.about.theBasics.childMarkdownRemark.html }} style={{ padding: '.25em 4em', fontSize: '1.2em'}}></div>
        </div>
        
        
      </section>
    )
  }
}

export default AboutSpace; 
