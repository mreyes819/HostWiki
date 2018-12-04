import React from 'react';

 
class UpdateEventMenu extends React.Component {


  render() {
    return (
      <ul>
        {this.props.events.map(event => { 
          return (
            <li key={event.id}>
              <a href={`#${event.title.split(' ').join('')}`} > 
                {event.title} 
              </a>
            </li>
          )
        })}
      </ul>
    )
    
  }

}


export default UpdateEventMenu; 
