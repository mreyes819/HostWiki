import React from "react"
import './NewTab.css';

class NewTab extends React.Component { 

  render() { 
    return(
      <div className='embed-container'> 
        <a className='embed-button button' target="_blank" href={this.props.api.url}>
          {this.props.api.title}
          </a>  
      </div>        
    )
  }
}

export default NewTab;