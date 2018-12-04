import React from 'react';

 
class MessagesMenu extends React.Component {

  render() {
    return (
      <ul>
        {this.props.messages.map(message => { 
          return (
            <li key={message.id}>
              <a href={`#${message.title.split(' ').join('')}`}> 
                {message.timeMilitary} {message.title} 
              </a>
            </li>
          )
        })}
      </ul>
    )
    
  }

}


export default MessagesMenu; 

 