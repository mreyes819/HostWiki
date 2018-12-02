import React from 'react';

 
class UpdatesEvents extends React.Component {

  render() {
    return (
      <section className='schedule'>
        <h2> Schedule</h2>
        {this.props.updates.map(update => { 
          return (
            <div className='section-component' key={update.id}>
              <h3>{update.title}</h3>
              <p>{update.message.message}</p>
            </div>
          )
        })}                
      </section>
    )
  }
}


export default UpdatesEvents; 