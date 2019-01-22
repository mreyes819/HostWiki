import React from 'react';
import Img from "gatsby-image"
import { Carousel} from 'react-bootstrap';

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

    let description;
    if(this.props.data.description) { 
      description = <div dangerouslySetInnerHTML={{ __html: this.props.data.description.childMarkdownRemark.html}} style={{ padding: '1em'}}/>
    } 
    

    return (
      <div>
        {description}
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          {this.props.data.photos.map(photo => { 
            let stepDescription, fluid,image
            if(photo.description) { 
              stepDescription = <p dangerouslySetInnerHTML={{ __html: photo.description.childMarkdownRemark.html}} style={{ padding: '1em'}}/>
            }
            if(photo.photo) {             
              image = <Img fluid={photo.photo.fluid} style={{height: '50vh'}}/>
            }
            return (
              <Carousel.Item>
                
                {image}
                <Carousel.Caption>
                  <h3>{photo.title}</h3>
                  {stepDescription}
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}



        </Carousel>
      </div>
    );
  }
}

export default ControlledCarousel;