import React from 'react';

class ChecklistSchedule extends React.Component {


  render() {
    return (
      <div className=''>
        {this.props.scheduleChecklist.map(schedule => {
          return(
            <div className='sub-section' key={schedule.id} dangerouslySetInnerHTML={{ __html: schedule.checklist.childMarkdownRemark.html }} />
            
          )})}
      </div>    
    )
  }
}


export default ChecklistSchedule; 