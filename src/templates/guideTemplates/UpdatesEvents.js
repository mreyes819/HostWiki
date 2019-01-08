import React from 'react';

class UpdatesEvents extends React.Component { 
  render(){
    let component = null;
    if(this.props.updatesEvents) { 
      component = this.props.updatesEvents.map(ue => { 
          return (
            <div key={ue.id} style={{padding:'.25em 4em', fontSize: '1.2em'}}>
              <h3 style={{}}>{ue.title}</h3>
              <p style={{}}dangerouslySetInnerHTML={{__html:ue.message.childMarkdownRemark.html}} /> 
            </div>
          )
        })
    }

    return(
      <section id='events-updates' className='system-main'>
        <h2 style={{margin:'0'}}>
          <span id="updatesEvents"></span>
          Updates & Events
        </h2>
        {component}
      </section>
    )
  }
}

export default UpdatesEvents;
