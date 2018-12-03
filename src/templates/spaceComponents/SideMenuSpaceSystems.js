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
