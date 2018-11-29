import React from 'react';
import { ReactTypeformEmbed } from 'react-typeform-embed';
 
class Typeform extends React.Component {
  render() {
    return (
      <ReactTypeformEmbed 
      url={'https://spaciousapp.typeform.com/to/rsq8m0'}  
      hideHeaders={true}
      hideFooter={true}
      style={{position:'relative'}}
      />
    )
  }
}


export default Typeform; 