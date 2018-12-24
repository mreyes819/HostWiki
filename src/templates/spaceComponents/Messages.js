import React from 'react';


 
class Systems extends React.Component {

  render() {
    return (
      <article id='messages'>
    
        <h2>
          <span></span>
          Messages
        </h2>      
        <div className=''>
        
          {this.props.messages.map(message => {
            return (
            <div key={message.id} className='sub-section'>
              <h3 id={message.title.split(' ').join('')}> {message.timeMilitary} {message.title}</h3>
              <div className='description' key={message.id} dangerouslySetInnerHTML={{ __html:  message.message.childMarkdownRemark.html }} />
            </div>
            )
          })}
        
        </div>
      </article>   
    )
  }
}


export default Systems; 