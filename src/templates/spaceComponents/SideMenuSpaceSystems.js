import React from 'react';

 
class SpaceSystemMenu extends React.Component {

  render() {
    return (
      <ul>
        {this.props.systems.map(system => { 
          return (
            <li key={system.id}>
              <a href={`#${system.spaceSystems.split(' ').join('')}`}> 
                {system.spaceSystems} 
              </a>
            </li>
          )
        })}
      </ul>
    )
    
  }

}


export default SpaceSystemMenu; 
