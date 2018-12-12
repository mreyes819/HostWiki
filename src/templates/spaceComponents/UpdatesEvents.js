import React from 'react';

class UpdatesEvents extends React.Component {

  render() {
    return (
      <section>      
          <h2> 
            <span id='updates-events'></span>
            Updates & Events
          </h2>     
          {this.props.updates.map(update => { 
            return (
              <div key={update.id} className='sub-section'>
                <h3>
                  <span id={update.title.split(' ').join('')}></span>
                  {update.title}
                </h3>

                <p>{update.message.message}</p>
              </div>
            )
          })}                
      </section>
    )
  }
}


export default UpdatesEvents; 