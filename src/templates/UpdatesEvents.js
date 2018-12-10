import React from 'react';

 // todo: refactor to a functional component
class UpdatesEvents extends React.Component {

  render() {
    return (
      <div className=''>
        
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
      </div>
    )
  }
}


export default UpdatesEvents; 