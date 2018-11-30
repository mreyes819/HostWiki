import React from "react"
import { graphql } from "gatsby" // Link, 
import * as PropTypes from "prop-types"
import Helmet from 'react-helmet'
import './space.css'
import Navigation from '../components/navigation';
import UpdatesEvents from './UpdatesEvents';
import AboutPhotos from './spaceComponents/AboutPhotos';
import Address from './spaceComponents/Address';
import Systems from './spaceComponents/SpaceSystems';
import Messages from './spaceComponents/Messages'
// import Typeform from './spaceComponents/typeform';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class SpaceTemplate extends React.Component {


  render() {
    const space = this.props.data.contentfulSpace;
    let updates, aboutPhotos, aboutDescription, aboutAddress, systems, messages;



    if(space.updates) {
      updates = <UpdatesEvents updates={space.updates} />
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
    } if (space.messages) { 
      messages = <Messages messages={space.messages} /> 
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

            <article className='updates'>
              <h2> Updates & Events </h2>

              {updates}
            </article>

            <article className='schedule'>
              <h2> Schedule</h2>
            </article>


            <article className='overview'>
              <h2> About </h2>
              {aboutPhotos}

              <section className='Description'>
                <h3> Description </h3>
                {aboutDescription}
              </section>

              <section className='address'>
                <h3> Address </h3>
                {aboutAddress}
              </section>


            </article>


            <article className='systems-operations'>
              <h2>System Location & Operation</h2>
              {systems}
            </article>

            <article>
              <h2>Forms & Checklists </h2>
              <section className='typeform'>


              </section>
            </article>

            <article>
              <h2>Messages</h2>
              {messages}
            </article>            
          </div>




          <div className='sidenav-container'>
            <div className='sidenav-layout'>
              <h2 className='space'> Operations </h2>
              <h3> Updates & Events </h3>


              <h3> Schedule</h3>
              <ul>
                <li>Opening Operations</li>
                <li>Day Operations</li>
                <li>Closing Operations</li>
              </ul>


              <h3> About {space.spaceName} </h3>
              <ul>  
                <li> Photos </li>
                <li> Description </li>
                <li> Address </li>
                <li> Hours of Operation </li>
                <li> Personnel </li> 
                <li> Phone Number </li> 
                <li> Website & Social Media </li> 
              </ul>

              <h3> System, Location, and Operation</h3>
              <ul>  
                <li> Air Conditioning </li>
                <li> Alarm </li>
                <li> Audio </li> 
                <li> Blinds </li>
                <li> Coffee Bar Setup </li>
                <li> Coffee Machine </li>
                <li> Glassware </li> 
                <li> Lights </li>
                <li> Phone </li> 
                <li> Ice Machine, Bucket and Scoop </li>
                <li> Washing Machine </li>
                <li> Water </li> 
                <li> WiFi </li>

              </ul>

              <h3> Forms & Checklists </h3>
              <ul>  
                <li> Opening </li>
                <li> Notable Interaction </li>
                <li> Closing </li>
                <li> Inventory </li>
              </ul>

              <h3> Messages </h3>
              <ul>  
                <li> 11:30am Lunch </li>
                <li> 3:30pm Migrate </li>
                <li> 4:30pm Last Call </li> 
                <li> Closing</li> 
              </ul>                
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
      fluid(maxWidth: 1200, maxHeight: 600) {
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
          fluid(maxWidth:800, ) {
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