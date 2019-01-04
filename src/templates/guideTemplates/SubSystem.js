import React from 'react';

import './SubSystem.css';


import Message from '../../components/spaceGuide/Message';
import Embed from '../../components/spaceGuide/Embed';
import Address from '../../components/spaceGuide/Address';
import TitleText from '../../components/spaceGuide/TitleText';

class SubSystem extends React.Component { 
  
  render(){
    
    return(
      this.props.systems.map(system => { 
        let systemDescription = null
        if(system.description) {
          systemDescription = <p style={{padding: '1em'}} dangerouslySetInnerHTML={{ __html: system.description.childMarkdownRemark.html}} />
        }

        return (

          <section key={system.id} id={system.id} className='sub-system'>
            <h2><span ></span>{system.title}</h2>
            {systemDescription}
            {system.components.map(component => { 

              let message = null;
              let embed = null;
              let address = null;
              let titleText = null;
              // console.log('TYPE: ', component.__typename)

              if(component.__typename === 'ContentfulComponentMessage') { 
                message = <Message message={component.message.childMarkdownRemark.html} />
              } else if (component.__typename === 'ContentfulComponentApi') { 
                embed = <Embed api={component}/>
              } else if (component.__typename === 'ContentfulComponentAddress') { 
                address = <Address defaultCenter={component.street}/>
              } else if (component.__typename === 'ContentfulComponentTitleAndText') { 
                // console.log('TitleText: ', component)
                titleText= <TitleText titleText={component}/>
              }


              return(
                <div key={component.id} className='component'>

                  <h3><span id={component.id}></span>{component.title}</h3>
                  <div className='body'>
                    {message}
                    {embed}
                    {address}
                    {titleText}
                  </div>
                    
                </div>

              )
            })}
          </section>
        )
      })
      
    )
  }
}

export default SubSystem;