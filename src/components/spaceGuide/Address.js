import React from 'react';
import Iframe from 'react-iframe'
import axios from 'axios';

class MapComponent extends React.Component {

  constructor(props) { 
    super(props);
    this.state = {
      geo: {},
      place_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo', 
      address: '',
      defaultCenter: {}
    }
  }

  componentDidMount() { 
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.props.defaultCenter.lat},${this.props.defaultCenter.lon}&key=AIzaSyDAs1iNCU5Ovq46wkjGa8q3PSDQMpOvXrg`).then(res => { 

      if(res.data.results) { 
        this.setState({
          place_id: res.data.results[0].place_id, 
          address: res.data.results[0].formatted_address
        })
      }
    })
  }

  render() { 
    return(
      <div> 
        <Iframe 
          url={`https://www.google.com/maps/embed/v1/place?q=place_id:${this.state.place_id}&key=AIzaSyDAs1iNCU5Ovq46wkjGa8q3PSDQMpOvXrg`} 
          width="100%" 
          height="40vh" 
          frameborder="0" 
          position='relative'
          allowfullscreen
          >
        </Iframe>
      </div>
    )
  }

}


export default MapComponent; 


