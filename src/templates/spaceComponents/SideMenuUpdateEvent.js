import React from 'react';

 
class UpdateEventMenu extends React.Component {


  render() {
    return (
      <ul>
        {this.props.events.map(event => { 
          return (
            <li><a href={`#${event.id}`}> {event.title} </a></li>
          )
        })}
      </ul>
    )
    
  }

}


export default UpdateEventMenu; 
