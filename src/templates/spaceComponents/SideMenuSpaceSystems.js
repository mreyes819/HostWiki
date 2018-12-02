import React from 'react';

 
class SpaceSystemMenu extends React.Component {

  render() {
    return (
      <ul>
        {this.props.systems.map(system => { 
          return (
            <li><a href={`#${system.id}`}> {system.spaceSystems} </a></li>
          )
        })}
      </ul>
    )
    
  }

}


export default SpaceSystemMenu; 


      // <div className='systems'>
      //   {this.props.systems.map(system => { 

      //     return (
      //       <div key={system.id} > 
      //         <h3>{system.spaceSystems}</h3>
      //         {system.steps.map(step =>{ 
      //           return(
      //             <div key={step.id} className='section-component'>
                    
      //               {step.photos.map(photo => { 
      //                 return (
      //                   <div key={photo.id} > 
      //                     <h4>{photo.title}</h4>
      //                     <Img fluid={photo.fluid} className='system-photo' />
      //                     <p> {photo.description} </p>
      //                   </div>
      //                 )
      //               })}
                    
      //             </div>
      //           )
      //         })}
      //       </div>
      //     )
      //   })}
      // </div>