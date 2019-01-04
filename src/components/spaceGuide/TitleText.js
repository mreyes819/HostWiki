import React from 'react';

class TitleText extends React.Component { 
  render() { 
    console.log('TITLETEXT: ', this.props.titleText)
    return (
      <div className='title-text'>   
        
        <p dangerouslySetInnerHTML= {{__html: this.props.titleText.body.childMarkdownRemark.html}} style={{ fontSize: '1.2em', padding: '1em'}}/> 

      </div>
    )
  }

}

export default TitleText;

