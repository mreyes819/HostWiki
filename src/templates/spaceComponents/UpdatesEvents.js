import React from 'react';

class UpdatesEvents extends React.Component {

  render() {
    return (
      <div className='system'>
      <section className='sub-section'>      
          <h2> 
            <span id='updates-events'></span>
            Updates & Events
          </h2>     
          {this.props.updates.map(update => { 
            return (
              <div key={update.id} className='updates'>
                <h3>
                  <span id={update.title.split(' ').join('')}></span>
                  {update.title}
                </h3>

                <div key={update.id} dangerouslySetInnerHTML={{ __html: update.message.childMarkdownRemark.html }} />
              </div>
            )
          })}                
      </section>
      </div>
    )
  }
}


export default UpdatesEvents; 