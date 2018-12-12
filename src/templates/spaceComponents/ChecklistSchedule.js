import React from 'react';

class ChecklistSchedule extends React.Component {


  render() {
    return (
      
        <section className='system'>  
          <h2> 
            <span id='schedule'></span>
            Schedule  
          </h2>      
          <div>
            {this.props.scheduleChecklist.map(schedule => {
              return(
                <div className='sub-section' key={schedule.id} dangerouslySetInnerHTML={{ __html: schedule.checklist.childMarkdownRemark.html }} />
                
              )})}
          </div>    
        </section>
             
    )
  }
}


export default ChecklistSchedule; 