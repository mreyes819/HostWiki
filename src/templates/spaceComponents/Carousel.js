import React from 'react';
import Img from "gatsby-image"
import { Carousel} from 'react-bootstrap';
import './Carousel.css';
import Helmet from 'react-helmet'

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;
      
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
 
       {this.props.steps.map(step => { 
          let stepDescription;
          if(step.description) { 
            stepDescription = <p key={step.id} dangerouslySetInnerHTML={{ __html: step.description.childMarkdownRemark.html }} />
          }        
          return(
            <Carousel.Item className='system-photo'>
              <Img fluid={step.photo.fluid} key={step.photo.id} />
              <Carousel.Caption>
                <h4>{step.title}</h4>
                {stepDescription}
              </Carousel.Caption>
            </Carousel.Item>
          )
       })}

      </Carousel>
    );
  }
}


export default ControlledCarousel;
