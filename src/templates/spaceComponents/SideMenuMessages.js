import React from 'react';

 
class MessagesMenu extends React.Component {

  render() {
    return (
      <ul>
        {this.props.messages.map(message => { 
          return (
            <li><a href={`#${message.id}`}> {message.timeMilitary} {message.title} </a></li>
          )
        })}
      </ul>
    )
    
  }

}


export default MessagesMenu; 

 