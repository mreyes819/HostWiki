import React from 'react';
import Img from "gatsby-image"
import { Carousel} from 'react-bootstrap';
import './Carousel.css';

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
    console.log('data: ', this.props.data)

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
          let stepDescription;
          if(photo.description) { 
            stepDescription = <p key={photo.id} dangerouslySetInnerHTML={{ __html: photo.description.childMarkdownRemark.html }} />
          }   
          return (
            <Carousel.Item className='system-photo'>

              <Carousel.Caption>
                <h4>{photo.title}</h4>
                {description}
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
