import React from 'react';
import Img from "gatsby-image"

 
class Systems extends React.Component {

  render() {
    return (
      <section className='section-systems'>
        {this.props.systems.map(system => { 

          return (
            <div key={system.id} > 
              <h2>{system.spaceSystems}</h2>
              {system.steps.map(step =>{ 
                return(
                  <div key={step.id} className='section-component'>
                    
                    {step.photos.map(photo => { 
                      return (
                        <div key={photo.id} className='system-photo'> 
                          <h4>{photo.title}</h4>
                          <Img fluid={photo.fluid} />
                          <p> {photo.description} </p>
                        </div>
                      )
                    })}
                    
                  </div>
                )
              })}
            </div>
          )
        })}
      </section>
    )
  }
}


export default Systems; 