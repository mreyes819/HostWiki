import React from "react"
import Address from '../../components/spaceGuide/Address';
import Img from "gatsby-image"
import './About.css';

class AboutSpace extends React.Component {

  render() { 
    return (
      <section id='about' className='system-main'> 
        <h1 style={{fontWeight: '30'}}>{this.props.space}</h1>
        <Img fluid={this.props.hero.fluid} />
        <div dangerouslySetInnerHTML={{ __html: this.props.about.childContentfulSpaceInformationDescriptionTextNode.childMarkdownRemark.html}} style={{ padding: '1em'}}/>
        
        <h2><span id="theBasics"></span>The Basics</h2>
        <Address defaultCenter={this.props.about.mainAddress} className='main-address2'/>
        <div className='about-basics'>
          
          <div dangerouslySetInnerHTML=
          {{ __html: this.props.about.theBasics.childMarkdownRemark.html }} style={{ padding: '1em'}}></div>
        </div>
        
        
      </section>
    )
  }
}

export default AboutSpace; 
