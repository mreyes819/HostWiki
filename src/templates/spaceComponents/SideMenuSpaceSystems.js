import React from 'react';
import Scrollspy from 'react-scrollspy'
 
class SpaceSystemMenu extends React.Component {

  render() {
    let items = this.props.systems.map(system => 
      system.spaceSystems.split(' ').join('')
    );

    return (
      <Scrollspy
        items={ items }
        currentClassName="is-current"
        style = {{ fontWeight: 300}}
        offset={ 400 }
        >
        {this.props.systems.map(system => { 
          return (
            <li key={system.id}>
              <input type="checkbox" />            
              <a href={`#${system.spaceSystems.split(' ').join('')}`}> 
                {system.spaceSystems} 
              </a>
            </li>
          )
        })}
      </Scrollspy>
    )
    
  }

}


export default SpaceSystemMenu; 
