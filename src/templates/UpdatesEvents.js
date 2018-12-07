import React from 'react';

 
class UpdatesEvents extends React.Component {

  render() {
    return (
      <div className='updates-events'>
        
        {this.props.updates.map(update => { 
          return (
            <div key={update.id}>
              <h3>
                <span id={update.title.split(' ').join('')}></span>
                {update.title}
              </h3>

              <p>{update.message.message}</p>
            </div>
          )
        })}                
      </div>
    )
  }
}


export default UpdatesEvents; 