import React from "react"
import { graphql } from "gatsby" // Link, 
import * as PropTypes from "prop-types"
import Helmet from 'react-helmet'
import Img from "gatsby-image";
import './space.css'
import Navigation from '../components/navigation';
import AboutSpace from './spaceComponents/AboutSpace';
import AboutPhotos from './spaceComponents/AboutPhotos';
import Address from './spaceComponents/Address';
import UpdatesEvents from './spaceComponents/UpdatesEvents';
import ChecklistSchedule from './spaceComponents/ChecklistSchedule';
import Systems from './spaceComponents/SpaceSystems';
import CordMap from './spaceComponents/CordMap';
import Messages from './spaceComponents/Messages';


import FormsMenu from './spaceComponents/SideMenuForms';
import SystemsMenu from './spaceComponents/SideMenuSpaceSystems';
import MessagesMenu from './spaceComponents/SideMenuMessages';
import Carousel from './spaceComponents/Carousel'
import Iframe from 'react-iframe'
// import UpdateEventMenu from './spaceComponents/SideMenuUpdateEvent';






import Scrollspy from 'react-scrollspy'
// http://makotot.github.io/react-scrollspy/
// https://www.npmjs.com/package/react-scrollspy







// import Typeform from './spaceComponents/typeform'; // won't build uses global or window - noop for gatsby but there might be a workaround. 

const propTypes = {
  data: PropTypes.object.isRequired,
}

class SpaceTemplate extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     active: 1
  //   }
  //   this.handleScroll = this.handleScroll.bind(this);
  // }

  // componentDidMount() {
  //   this.scrollSpyText.addEventListener('scroll', this.handleScroll);
  //   let scrollSpySections = this.scrollSpyText.getElementsByTagName('h4');
  //   for (let i = 0; i < scrollSpySections.length; i++) {
  //     let currentOffsetTop = scrollSpySections[i].offsetTop - 16;
  //     if (!scrollSpySectionsOffset.includes(currentOffsetTop)) {
  //       scrollSpySectionsOffset.push(currentOffsetTop);
  //     }
  //   }
  // }

  // componentWillUnmount() {
  //   this.scrollSpyText.removeEventListener('scroll', this.handleScroll);
  // }

  // handleScroll() {
  //   for (let i = 0; i < scrollSpySectionsOffset.length; i++) {
  //     if (this.scrollSpyText.scrollTop > scrollSpySectionsOffset[i]) {
  //       if (this.scrollSpyText.scrollTop > scrollSpySectionsOffset[i+1]) {
  //       } else {
  //         this.setState({active: i+1});
  //       }
  //     }
  //   }

  // }


  render() {
    const space = this.props.data.contentfulSpace;
    let updates, aboutPhotos, aboutDescription, aboutAddress, systems, messages, systemsMenuLink, 
    updateEventMenuLink, messagesMenuLink, formsMenuLink, checkSchedule, cordMapComp, aboutSpace;



    if (space.aboutSpace) {
      aboutSpace = <AboutSpace space={space} />
    } if(space.updates) {
      updates = <UpdatesEvents updates={space.updates} />
      // updateEventMenuLink = <UpdateEventMenu events={space.updates}/>
    } if (space.scheduleChecklist) { 
      checkSchedule = <ChecklistSchedule scheduleChecklist={space.scheduleChecklist} />
    } if (space.systems2) {
      systems = <Systems systems={space.systems2} />
      systemsMenuLink = <SystemsMenu systems={space.systems2} />
    } if (space.cordMap) { 
      cordMapComp = <CordMap cordMap={space.cordMap} className='system-photo' />
    } if (space.messages) {
      messages = <Messages messages={space.messages} /> 
      messagesMenuLink = <MessagesMenu messages={space.messages}/> 
    } if (space.forms) { 
      formsMenuLink = <FormsMenu forms={space.forms}/>
    }

    let systemitems = space.systems2.map(system => system.spaceSystems.split(' ').join(''))
    let scrollSpyItems = ['about-space', 'updates-events', 'schedule', 'where-how', ...systemitems, 'cord-map', 'messages']; 

    return (

      <div className='screen'>

        <Helmet title={`Space Guide - ${space.spaceName}`}>

      
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
        </Helmet>         

        <Navigation /> 

        <div className='page-container'>


          <div className='main'>
            {aboutSpace}   
            {updates}
            {checkSchedule}                                
            {systems}
            {cordMapComp}
            {messages}
            <div className='end'> </div>           
          </div>

          <Scrollspy className='sidenav sidenav-layout' 
                     items={ scrollSpyItems } 
                     currentClassName="is-current"
                     offset={ 20 }
                     style={ {fontWeight: 300} }
                     offset={ -20 }
                     onUpdate={
                       (el) => {
                         console.log(el)
                       }
                     }>

            <li> 
              <a href='#about-space'> About {space.spaceName} </a>
            </li>


            <li> 
              <a href='#updates-events'> Updates & Events </a>
            </li>       

            <li> 
              <a href='#schedule'> Schedule </a>
            </li>

            <li> 
              <a href='#where-how'> Where & How To </a>
            </li>
            {systemsMenuLink}

            <li> 
              <a href='#cord-map'> Cord Map </a>
             </li>

            <li> 
              <a href='#messages'> Messages </a>
            </li>
            {messagesMenuLink}


            <div className='forms-checklist'>
              <li> Forms & Checklists </li>
              {formsMenuLink}
            </div>
            
          </Scrollspy>          

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
    id
    spaceName
    stockPhotos{
      id
      fluid(maxWidth: 2000, maxHeight: 1000) {
        ...GatsbyContentfulFluid
      }
    }
    systems2 {
      id
      spaceSystems
      systemDescription {
        childMarkdownRemark {
          html
        }
      }
      steps {
        id
        title
        photo {
          id
          fluid(maxWidth: 800, maxHeight: 600) {
            ...GatsbyContentfulFluid
          }
        }
        description {
          childMarkdownRemark {
            html
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
        childMarkdownRemark{
          html
        }
      }
    }
    scheduleChecklist{
      id
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
    messages {
      id
      timeMilitary
      title
      message {
        id
        message
        childMarkdownRemark{
          html
        }
      }
    }
    
    cordMap{
      fluid(maxWidth: 800, maxHeight: 600) {
        ...GatsbyContentfulFluid
      }
    }    

  }
}

`