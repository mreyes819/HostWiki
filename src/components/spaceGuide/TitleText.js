import React from 'react';

class TitleText extends React.Component { 
  render() { 
    
    return (
      <div className='title-text'>   
        
        <p dangerouslySetInnerHTML= {{__html: this.props.titleText.body.childMarkdownRemark.html}} style={{ padding: '1em'}}/> 

      </div>
    )
  }

}

export default TitleText;

