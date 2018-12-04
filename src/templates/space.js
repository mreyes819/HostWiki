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

      <div>

        <Helmet title={`Space Guide - ${space.spaceName}`}>
          <html lang="en" />
        </Helmet>

        <Navigation /> 

        <div className='page-container'>

          <div className='main'>
            <h1 className='space'> {space.spaceName} </h1>
            <article> 
              

              <section className='updates-events'>
              {updates}
              </section>

              <section className='schedule'>  
                {/*Schedule*/}
              </section>
            </article>

            <article>
              <h2> Schedule </h2>
            </article>

            <article className='overview'>
              <h2>
                Info
              </h2>
              {aboutPhotos}

              <section className='description'>
                <h2> Description </h2>
                {aboutDescription}
              </section>

              <section className='address'>
                <h2> Address </h2>
                {aboutAddress}
              </section>
            </article>


            <article className='systems'>
              <section className='systems-operations'>
                <h2>Where to find and or use</h2>
                {systems}
              </section>
            </article>


            <h2>Messages</h2>
            <article>
              {messages}
            </article>            
          </div>




          <div className='sidenav-container'>
            <div className='sidenav-layout'>

              <h2> Updates & Events </h2>
              {updateEventMenuLink}

              <h2> Schedule</h2>
              <ul>
                <li>Opening Operations</li>
                <li>Day Operations</li>
                <li>Closing Operations</li>
              </ul>


              <h2> Info </h2>
              <ul>  
                <li> Photos </li>
                <li> Description </li>
                <li> Address </li>
                <li> Hours of Operation </li>
                <li> Personnel </li> 
                <li> Phone Number </li> 
                <li> Website & Social Media </li> 
              </ul>


              <h2> Where to find and or use</h2>
               {systemsMenuLink}


              <h2> Forms & Checklists </h2>
                {formsMenuLink}


              <h2> Messages </h2>
              {messagesMenuLink}


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
      title
      checklist{
        checklist
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
      type
      url
    }
    messages{
      id
      timeMilitary
      title
      message{
         message
      }
    }
    

  }
}

`