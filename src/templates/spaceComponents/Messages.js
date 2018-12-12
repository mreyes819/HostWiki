import React from 'react';


 
class Systems extends React.Component {

  render() {
    return (
      <article>
    
        <h2>
          <span id='messages'></span>
          Messages
        </h2>      
        <div className=''>
        
          {this.props.messages.map(message => {
            return (
            <div key={message.id} className='sub-section'>
              <h3 id={message.title.split(' ').join('')}> {message.timeMilitary} {message.title}</h3>
              <p></p>
              <p>{message.message.message}</p>
            </div>
            )
          })}
        
        </div>
      </article>   
    )
  }
}


export default Systems; 