import React from 'react';


 
class Systems extends React.Component {

  render() {
    return (
      <section>
      
        {this.props.messages.map(message => {
          return (
          <div key={message.id}>
          <h3>{message.title}</h3>
          <p>{message.timeMilitary}</p>
          <p>{message.message.message}</p>
          </div>
          )
        })}
      
      </section>
    )
  }
}


export default Systems; 