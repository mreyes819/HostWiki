import React from 'react';

 
class FormsMenu extends React.Component {

  render() {
    return (
      <ul> 
        {this.props.forms.map(form => { 
          return (
           <a href={form.url} target="_blank"><li>{form.type}</li> </a>
           )
        })}
      </ul>
    )
    
  }

}


export default FormsMenu; 

 