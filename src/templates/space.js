import React from "react"
import { graphql } from "gatsby" // Link, 
import * as PropTypes from "prop-types"
// import Img from "gatsby-image"
import Helmet from 'react-helmet'
import './space.css'
import Navigation from '../components/navigation';
import MapComponent from './spaceComponents/map';
import Typeform from './spaceComponents/typeform';

const propTypes = {
  data: PropTypes.object.isRequired,
}

class SpaceTemplate extends React.Component {
  render() {
    const space = this.props.data.contentfulSpace;
    
    console.log(space.aboutSpace.addresses)
    // modules.forEach(module => { 
    //   if(module.__typename === 'ContentfulSpaceInformation'){ info = module;}
    //   if(module.__typename === 'ContentfulSpaceMessages'){ messages = module;}
    //   if(module.__typename === 'ContentfulSpaceSystems'){ systems = module;}
    //   if(module.__typename === 'ContentfulSpaceUpdates'){ updates = module;}
    // })

    // console.log(info)
    // console.log(messages)
    // console.log(systems)
    
                    // <Map 
                    //   center={[address.address.lat, address.address.lon]} 
                    //   zoom={17}/>
    return (

      <div>

        <Helmet title={`Space Guide -  SPACENAME`}>
          <html lang="en" />
        </Helmet>

        <Navigation /> 

        <div className='page-container'>

          <div className='main'>
            <h1 className='space'> SPACENAME </h1>

            <article className='updates'>
              <h2> Updates & Events </h2>
              <section>
                {space.updates.map(update => { 
                  // id title message
                  return (
                    <div>
                      <h3>{update.title}</h3>
                      <p>{update.message.message}</p>
                    </div>
                  )
                })}                

              </section>
            </article>





            <article className='overview'>
              <h2> About </h2>

              <section>
                <div className='about-photos-container'> 

                </div>
              </section>

              <section className='Description'>
                <h3> Description </h3>

              </section>

              <section className='address'>
                <div>
                  {space.aboutSpace.addresses.filter(address => address.type === "Main Entrance").map(address => { 
                    return (

                      <div> 
                        <h3> {address.type} </h3>
                        
                        <MapComponent defaultCenter={{lat: address.address.lat, lng: address.address.lon}} />
                      </div>
                    )
                  })
                  
                  }
                </div>
              </section>


            </article>


            <article>
              <h2>System Locations & Operation</h2>
              <section>
              </section>
            </article>

            <article>
              <h2>Forms</h2>
              <section>
                <Typeform />

              </section>
            </article>

            <article>
              <h2>Messages</h2>
              <section>
              <div> 
                {space.messages.map(message => {
                  return (
                  <div>
                  <h3>{message.title}</h3>
                  <p>{message.timeMilitary}</p>
                  <p>{message.message.message}</p>
                  </div>
                  )
                })}
              </div>
              </section>
            </article>            
          </div>




          <div className='sidenav-container'>
            <div className='sidenav-layout'>
              <h2 className='space'> Operations </h2>
              <h3> Updates & Events </h3>


              <h3> Schedule & Checklist </h3>
              <ul>
                <li>Opening Operations</li>
                <li>Day Operations</li>
                <li>Closing Operations</li>
              </ul>


              <h3> About SPACENAME </h3>
              <ul>  
                <li> Photos </li>
                <li> Description </li>
                <li> Address </li>
                <li> Hours of Operation </li>
                <li> Personnel </li> 
                <li> Phone Number </li> 
                <li> Website & Social Media </li> 
              </ul>

              <h3> Systems Location & Operation</h3>
              <ul>  
                <li> Air Conditioning </li>
                <li> Alarm </li>
                <li> Audio </li> 
                <li> Lights </li>
                <li> Blinds </li>
                <li> Coffee Bar Setup </li>
                <li> Coffee Machine </li>
                <li> Ice Machine, Bucket and Scoop </li>
                <li> Glassware </li> 
                <li> Washing Machine </li>
                <li> Water </li> 
                <li> WiFi </li>
                <li> Phone </li> 

              </ul>

              <h3> Forms </h3>
              <ul>  
                <li> Opening </li>
                <li> Notable Interaction </li>
                <li> Closing </li>
                <li> Inventory </li>
              </ul>

              <h3> Messages </h3>
              <ul>  
                <li> Lunch </li>
                <li> Migrate </li>
                <li> Last Call </li> 
                <li> Closing [Enjoy Happy Hour, 30 min warning]</li> 
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
        address{
          lon
          lat
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
    systems{
      steps{
        title
        
      }
    }
    forms{
      type
      url
    }
    messages{
      timeMilitary
      title
      message{
         message
      }
    }
    

  }
}

`