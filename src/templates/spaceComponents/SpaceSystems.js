import React from 'react';
import Img from "gatsby-image"

 
class Systems extends React.Component {

  render() {
    return (
      <div className='systems'>
        {/*        {this.props.systems.map(system => { 
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
                          <p> {photo.description} </p>
                          <Img fluid={photo.fluid} className='system-photo' />
                        </div>
                      )
                    })}
                    
                  </div>
                )
              })}
            </div>
          )
        })}*/}

        {this.props.systems.map(system => { 
          let systemDescription

          if(system.systemDescription) { 
            systemDescription = <div key={system.id} dangerouslySetInnerHTML={{ __html: system.systemDescription.childMarkdownRemark.html }} />
          }


          return (
            <div key={system.id} className='system'> 
              <h3 className='main-body'>
                <span id={system.spaceSystems.split(' ').join('')}></span>
                {system.spaceSystems}
              </h3>
              {systemDescription}
              {system.steps.map(step => { 
                let stepDescription;
                if(step.description) { 
                  stepDescription = <div key={step.id} dangerouslySetInnerHTML={{ __html: step.description.childMarkdownRemark.html }} />
                }


                return (
                  <div key={step.id} className='section-component'>
                    <h4>{step.title}</h4>
                    {stepDescription}
                    <Img fluid={step.photo.fluid} className='system-photo' />


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