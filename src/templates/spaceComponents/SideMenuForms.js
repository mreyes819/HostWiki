import React from 'react';

 
class FormsMenu extends React.Component {

  render() {
    return (
      <ul> 
        {this.props.forms.map(form => { 
          return (
           <a href={form.url} target="_blank" rel="noopener noreferrer" key={form.id}><li>{form.type}</li> </a>
           )
        })}
      </ul>
    )
    
  }

}


export default FormsMenu; 

 