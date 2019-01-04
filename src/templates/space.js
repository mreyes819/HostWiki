import React from "react"
import { graphql } from "gatsby"  
import * as PropTypes from "prop-types"
import Helmet from 'react-helmet'
import './space.css'
import Navigation from '../components/navigation';
import Scrollspy from 'react-scrollspy'
import About from './guideTemplates/About';
import UpdatesEvents from './guideTemplates/UpdatesEvents';
import ScheduleCheck from './guideTemplates/SubSystem';


const propTypes = {
  data: PropTypes.object.isRequired,
}

class SpaceTemplate extends React.Component {

  render() {
    const space = this.props.data.contentfulSpace;
    let systemScrollTitleItems, scrollSpyItems
    
    if(space.schedulesChecks) { 
 
    }

    

    let SystemScrollItems;
    if(space.schedulesChecks) { 
      systemScrollTitleItems = space.schedulesChecks.map(system => system.id)
      scrollSpyItems = ['about','events-updates', ...systemScrollTitleItems];

      SystemScrollItems = space.schedulesChecks.map(system => {        
        let subScrollItems = system.components.map(component => component.id)


        return (
          <li key={system.id}>
            <span className='menu-system'>
              <a href={`#${system.id}`}>
              {system.title}
              </a>  

              <Scrollspy               
                items={ subScrollItems } 
                currentClassName="is-current2"
                offset = { 110 }
                style={ {fontWeight: 200} }
                rootEl = {''}
                scrolledPastClassName={ 'is-past' }
                >

                {system.components.map(component => { 
                  return (
                    <li key={component.id} className='menu-component'>
                      <a href={`#${component.id}`}>
                        {component.title}
                      </a>
                    </li>
                  )
                })}
              </Scrollspy>
            </span>
          </li>
        )
      })
    }


    // console.log(SystemScrollItems)
    let about, updates, scheduleChecks;
    if(space.aboutSpace && space.stockPhotos) { 
      about = <About 
                about={space.aboutSpace} 
                hero={space.stockPhotos[0]} 
                space={space.spaceName}
                /> 
    } if (space.updates) { 
      updates = <UpdatesEvents 
                updatesEvents={space.updates} 
                />
    } if (space.schedulesChecks) { 
      scheduleChecks = <ScheduleCheck 
                 systems={space.schedulesChecks}
                 />
    }
    return (

      <div className='screen'>

        <Helmet title={`Space Guide - ${space.spaceName}`}>
      
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        </Helmet>         

        <Navigation /> 

        <div className='page-container'>


          <div className='main'>
            {about}
            {updates}
            {scheduleChecks}
            

            
            <div className='end'> </div>           
          </div>

          <div className='sidenav sidenav-layout' >
            <h1> Content & Schedule</h1>
            <Scrollspy 
              items={ scrollSpyItems } 
              currentClassName="is-current"
              style={ {fontWeight: 300} }
              offset={-250}
            >
            
              <li><a href="#theBasics" className='menu-system'>The Basics</a></li>
              <li><a href="#updatesEvents" className='menu-system'>Updates & Events</a></li>
              {SystemScrollItems}
              
            </Scrollspy>  
            
          </div>        

        </div>  {/*page-container*/}
      </div> /*screen*/
    )
  }
}

SpaceTemplate.propTypes = propTypes

export default SpaceTemplate

export const pageQuery = graphql`
query($id: String!){
  contentfulSpace(id: {eq: $id}) {
    spaceName
    stockPhotos {
      title
      fluid{
        aspectRatio
        sizes
        ...GatsbyContentfulFluid
      }
    }
    aboutSpace {
      childContentfulSpaceInformationDescriptionTextNode {
        childMarkdownRemark {
          html
        }
      }
      mainAddress {
        lat
        lon
      }
      theBasics {
        childMarkdownRemark {
          htmlAst
          rawMarkdownBody
          html
        }
      }
      socialMediaLinks {
        type
        url
      }
    }
    updates{
      id
      title
      message{
        childMarkdownRemark{
          html
        }
      }
    }
    schedulesChecks {
      id
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      components {
        ... on ContentfulComponentApi{
          id
          title
          type
          url
        }

        ... on ContentfulComponentMessage{
          id
          title
          message {
            id
            childMarkdownRemark{
              html
            }
          }
        }
        ... on ContentfulComponentLocation{
          title
          description{
            childMarkdownRemark{
              html
            }
          }
          address{
            lat
            lon
          }
        }        
        ... on ContentfulComponentTitleAndText {
          id
          title
          body{
            childMarkdownRemark{
              html
            }
          }
        }
        ... on ContentfulComponentTitleDescriptionPhoto {
          id
          title
          description{
            childMarkdownRemark{
              html
            }
          }
          photo {
            id
            
          }
        } 
        ... on ContentfulComponentTitleTextPhotos  {
          id
          title
          styleType
          description {
            childMarkdownRemark {
              html
            }
          }
          photos {
            id
            title
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
}


`