import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SubSystem.css';


import Message from '../../components/spaceGuide/Message';
import NewTab from '../../components/spaceGuide/NewTab';
import Address from '../../components/spaceGuide/Address';
import TitleText from '../../components/spaceGuide/TitleText';
import TitleTextPhoto from '../../components/spaceGuide/TitleTextPhoto';
import Carousel from '../spaceComponents/Carousel2';


class SubSystem extends React.Component { 
  
  render(){
    
    return(
      this.props.systems.map(system => { 
        let systemDescription = null
        if(system.description) {
          systemDescription = <p style={{padding:'2em 4em', fontSize: '1.3em'}} dangerouslySetInnerHTML={{ __html: system.description.childMarkdownRemark.html}} />
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
              let titleTextPhoto = null;
              let photos = null
              let tab = null;
              

              if (component.__typename === 'ContentfulComponentApi') { 
                // embed = <Embed api={component}/>
                tab = <NewTab api={component} /> 
              } else if(component.__typename === 'ContentfulComponentMessage') { 
                message = <Message message={component.message.childMarkdownRemark.html} />
              } else if (component.__typename === 'ContentfulComponentLocation') {
                address = <Address defaultCenter={component.address}/>
              } else if (component.__typename === 'ContentfulComponentTitleAndText') { 
                titleText= <TitleText titleText={component}/>
              } else if (component.__typename === 'ContentfulComponentTitleDescriptionPhoto') { 
                titleTextPhoto = <TitleTextPhoto data={component}/> 
              } else if (component.__typename === 'ContentfulComponentTitleTextPhotos') { 
                photos = <Carousel data={component}/> 
                if(component.styleType === 'Photo Grid > Photo, Text, Alt Text') { 
                  // console.log('Grid: ', component.styleType)

                } else if (component.styleType === 'Photo Carousel > Photo, Caption: Text, Alt Text') { 
                  // console.log(component)
                  
                  
                }
              }


              return(
                <div key={component.id} className='component'>

                  <h3><span id={component.id}></span>{component.title}</h3>
                  <div className='body'>
                    {message}
                    {tab}
                    {address}
                    {titleText}
                    {titleTextPhoto}
                    {photos}
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