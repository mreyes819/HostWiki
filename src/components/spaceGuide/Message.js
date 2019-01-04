import React from "react"
import './Message.css'


const Message = (props) => (
    <div className= 'message-container' >
      <p className= 'speech-bubble' dangerouslySetInnerHTML={{__html:props.message}} />
    </div>
  )

export default Message;
