import React from "react"
import { graphql } from "gatsby" // Link, 
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
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

    return (

      <div>

        <Helmet title={`Space Guide -  ${space.spaceName}`}>
          <html lang="en" />
        </Helmet>

        <Navigation /> 

        <div className='page-container'>

          <div className='main'>
            <h1 className='space'> {space.spaceName} </h1>

            <article className='updates'>
              <h2> Updates & Events </h2>
              <section>
                {space.updates.map(update => { 
                  // id title message
                  return (
                    <div key={update.id}>
                      <h3>{update.title}</h3>
                      <p>{update.message.message}</p>
                    </div>
                  )
                })}                

              </section>
            </article>

            <article className='schedule'>
              <h2> Schedule</h2>
            </article>





            <article className='overview'>
              <h2> About </h2>

              <section>
                <div className='about-photos-container'> 
                  {space.stockPhotos.map(photo => { 
                    return (
                      <Img fluid={photo.fluid}/>
                    )
                  })}
                </div>
              </section>

              <section className='Description'>
                <h3> Description </h3>
                <p>{space.aboutSpace.description.description}</p>
              </section>

              <section className='address'>
                <div>
                  {space.aboutSpace.addresses.filter(address => address.type === "Main Entrance").map(address => { 
                    return (

                      <div key={address.id}> 
                        <h3> {address.type} </h3>
                        
                        <MapComponent defaultCenter={{lat: address.street.lat, lng: address.street.lon}} />
                      </div>
                    )
                  })
                  
                  }
                </div>
              </section>


            </article>


            <article className='systems-operations'>
              <h2>System Location & Operation</h2>
              <section>
                {space.systems2.map(system => { 
                  return (
                    <div key={system.id}> 
                      <h2>{system.spaceSystems}</h2>
                      {system.steps.map(step =>{ 

                        return(
                          <div key={step.id}>
                            <h3>{step.title}</h3>
                            {step.photos.map(photo => { 
                              console.log(photo.description)
                              return (
                                <div> 
                                  <Img fluid={photo.fluid}/>
                                  <p> {photo.description} </p>
                                </div>
                              )
                            })}
                            
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </section>
            </article>

            <article>
              <h2>Forms & Checklists </h2>
              <section className='typeform'>
                <Typeform />

              </section>
            </article>

            <article>
              <h2>Messages</h2>
              <section>
              <div> 
                {space.messages.map(message => {
                  return (
                  <div key={message.id}>
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

              <h3> System Location & Operation</h3>
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
                <li> Lunch </li>
                <li> Migrate </li>
                <li> Last Call </li> 
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
      fluid(maxWidth: 1200, maxHeight: 600) {
        ...GatsbyContentfulFluid
      }
    }
    systems2{
      id
      spaceSystems
      steps{
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