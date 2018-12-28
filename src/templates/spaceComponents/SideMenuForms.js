import React from 'react';
import ModalForm from './Modal-Iframe-Typeform';

 
class FormsMenu extends React.Component {

  render() {
    return (
      <ul> 
        {this.props.forms.map(form => { 
          return (
            <ModalForm form={form} />
           )
        })}
      </ul>
    )
    
  }

}


export default FormsMenu; 

 