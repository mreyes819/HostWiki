import React from "react"
import { graphql } from "gatsby" // Link, 
import * as PropTypes from "prop-types"
import Helmet from 'react-helmet'
import './space.css'
import Navigation from '../components/navigation';
import UpdatesEvents from './UpdatesEvents';
import UpdateEventMenu from './spaceComponents/SideMenuUpdateEvent';
import AboutPhotos from './spaceComponents/AboutPhotos';
import Address from './spaceComponents/Address';
import Systems from './spaceComponents/SpaceSystems';
import SystemsMenu from './spaceComponents/SideMenuSpaceSystems';
import Messages from './spaceComponents/Messages';
import MessagesMenu from './spaceComponents/SideMenuMessages';
import FormsMenu from './spaceComponents/SideMenuForms';
// import Typeform from './spaceComponents/typeform';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class SpaceTemplate extends React.Component {


  render() {
    const space = this.props.data.contentfulSpace;
    let updates, aboutPhotos, aboutDescription, aboutAddress, 
    systems, messages, systemsMenuLink, updateEventMenuLink, messagesMenuLink, formsMenuLink;



    if(space.updates) {
      updates = <UpdatesEvents updates={space.updates} />
      updateEventMenuLink = <UpdateEventMenu events={space.updates}/>
    } if (!space.updates) { 
      updates = <section> </section>
    } if (space.stockPhotos) { 
      aboutPhotos = <AboutPhotos photos={space.stockPhotos} /> 
    } if (!space.stockPhotos) {
      aboutPhotos = <section> </section>
    } if (!space.aboutSpace) {
      aboutDescription = <p> </p>
    } if (space.aboutSpace) {
      aboutDescription = <p>{space.aboutSpace.description.description}</p>
    } if (space.aboutSpace) {
      aboutAddress = <Address addresses={space.aboutSpace.addresses} /> 
    } if (space.systems2) {
      systems = <Systems systems={space.systems2} />
      systemsMenuLink = <SystemsMenu systems={space.systems2} />
    } if (space.messages) {
      messages = <Messages messages={space.messages} /> 
      messagesMenuLink = <MessagesMenu messages={space.messages}/> 
    } if (space.forms) { 
      formsMenuLink = <FormsMenu forms={space.forms}/>
    }

    return (

      <div className='screen'>

        <Helmet title={`Space Guide - ${space.spaceName}`}>
          <html lang="en" />
        </Helmet>

        <Navigation /> 

        <div className='page-container'>
          <div className='main'>
            
            <article>
              {aboutPhotos}
              <h2> 
                <span className='main-span' id='about'></span>
                About {space.spaceName} 
              </h2>
              <div className='about'>



                <section>
                  <div>
                    <h3> Description </h3>
                    {aboutDescription} {/*just a p element*/}
                  </div>
                </section>

                <section>
                  <div>
                    {aboutAddress}
                  </div>
                </section>
              </div>
            </article>



            <article> 
              <section>
                {/*   why is there a div element?  */}
                <h2> Updates & Events</h2>
                {updates}
                
              </section>
            </article>

            <article>
              <section>  
                <h2> Checklist & Schedule  </h2>
                <div className='schedule'>
                  {space.scheduleChecklist.map(schedule => {
                    return(
                      <div dangerouslySetInnerHTML={{ __html: schedule.checklist.childMarkdownRemark.html }} />
                      
                    )})}
                </div>                         
              </section>
            </article>

            <article>
              <section>
                {systems}
              </section>
            </article>

            <article>
              <section>
                <h2> Cord Map </h2>
                <div className='updates-events'> 

                </div>
              </section>
            </article>

            
            <article>
              <section>
                <h2>Messages</h2>
                {messages}
              </section>
            </article>            
          </div>




          <div className='sidenav-container'>
            <div className='sidenav-layout'>
              <h1 className='space'>{space.spaceName} Guide</h1>

              <h2> 
                <a href='#about'> 
                  About {space.spaceName} 
                </a>
              </h2>



              <h2> Updates & Events </h2>
              

              <h2> Schedule</h2>
              <ul>
                <li>Opening Operations</li>
                <li>Day Operations</li>
                <li>Closing Operations</li>
              </ul>


              <h2> Where & How To </h2>
               {systemsMenuLink}

              <h2> Cord Map </h2>

              <h2> Messages </h2>

              <h2> Forms & Checklists </h2>
                {formsMenuLink}


              
              


            </div>
          </div>          

        </div>  
      </div>
    )
  }
}

SpaceTemplate.propTypes = propTypes

export default SpaceTemplate

export const pageQuery = graphql`
query($id: String!){
  contentfulSpace(id: {eq: $id}) {
    id
    spaceName
    stockPhotos{
      id
      fluid(maxWidth: 2000, maxHeight: 1000) {
        ...GatsbyContentfulFluid
      }
    }
    systems2{
      id
      spaceSystems
      steps{
        id
        title
        photos{
          title
          description
          id
          fluid(maxWidth:800) {
            ...GatsbyContentfulFluid
          } 
        }  
      }
    }

    updates{
      id
      title
      date
      message{
        message
      }
    }
    scheduleChecklist{
      checklist{
        childMarkdownRemark{
          html
          excerpt
        }
      }
    }
    aboutSpace{
      phoneNumber
      hours{
        typeDay
        militaryTime
        closeMilitaryTime
        open2MilitaryTime
        close2MilitaryTime
      }
      contacts{
        id
        name
        position
      }
      addresses{
        id
        type
        title
        street{
          lat
          lon
        }
      }
      socialMediaLinks{
        id
        type
        url
      }
      description{
        description
      }
    }
    
    forms{
      id
      type
      url
    }
    messages{
      id
      timeMilitary
      title
      message{
        id
        message
      }
    }
    

  }
}

`