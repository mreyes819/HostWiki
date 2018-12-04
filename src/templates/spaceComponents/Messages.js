import React from 'react';


 
class Systems extends React.Component {

  render() {
    return (
      <section>
      
        {this.props.messages.map(message => {
          return (
          <div key={message.id}>
            <h3 id={message.title.split(' ').join('')}> {message.timeMilitary} {message.title}</h3>
            <p></p>
            <p>{message.message.message}</p>
          </div>
          )
        })}
      
      </section>
    )
  }
}


export default Systems; 