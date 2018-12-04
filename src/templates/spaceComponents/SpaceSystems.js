import React from 'react';
import Img from "gatsby-image"

 
class Systems extends React.Component {

  render() {
    return (
      <div className='systems'>
        <h2>Where to find and or use</h2>
        {this.props.systems.map(system => { 
          return (
            <div key={system.id} className='system'> 
              <h3 className='main-body'>
                <span id={system.spaceSystems.split(' ').join('')}></span>
                {system.spaceSystems}
              </h3>
              
              {system.steps.map(step =>{ 
                return(
                  <div key={step.id} className='section-component'>
                    
                    {step.photos.map(photo => { 
                      return (
                        <div key={photo.id} > 
                          <h4>{photo.title}</h4>
                          <Img fluid={photo.fluid} className='system-photo' />
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
      </div>
    )
  }
}


export default Systems; 