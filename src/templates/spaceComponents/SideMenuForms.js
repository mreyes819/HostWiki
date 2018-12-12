import React from 'react';

 
class FormsMenu extends React.Component {

  render() {
    return (
      <ul> 
        {this.props.forms.map(form => { 
          return (
            <li key={form.id}>
              <a href={form.url} target="_blank" rel="noopener noreferrer" >
                {form.type}
              </a>
            </li> 
           )
        })}
      </ul>
    )
    
  }

}


export default FormsMenu; 

 