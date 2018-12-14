import React from 'react';
import Img from "gatsby-image"

 
class Systems extends React.Component {

  render() {
    return (
      <article>
        <section>
          <h2> 
            <span id='where-how'></span>
            Where & How to 
          </h2>   
          


          <div className='system'>

            {this.props.systems.map(system => { 
              
              let systemDescription

              if(system.systemDescription) { 
                systemDescription = <div className='description' key={system.id} dangerouslySetInnerHTML={{ __html: system.systemDescription.childMarkdownRemark.html }} />
              }


              return (
                <section key={system.id} className='sub-section'> 

                  <div className='section-component'>
                    <h3>
                      <span id={system.spaceSystems.split(' ').join('')}></span>
                      {system.spaceSystems}
                    </h3>
                    {systemDescription}
                  </div>


                  {system.steps.map(step => { 
                    let stepDescription, photo;

                    if(step.description) { 
                      stepDescription = <div className='description' key={step.id} dangerouslySetInnerHTML={{ __html: step.description.childMarkdownRemark.html }} />
                    }

                    if(step.photo.fluid) { 
                      photo = <Img fluid={step.photo.fluid} className='system-photo' />
                    }


                    return (
                      <div key={step.id} >
                        <div className='section-component'>
                          <h4>{step.title}</h4>
                          {stepDescription}
                          {photo}  
                        </div>
                        
                      </div>
                    )
                  })}
                </section>
              )
            })}

          </div>
        </section>
      </article>      
    )
  }
}


export default Systems; 