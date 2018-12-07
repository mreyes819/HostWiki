import React from 'react';
import MapComponent from './map';

 
class Address extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.addresses.map(address => { 
          return (
            <div key={address.id}> 
              <h3> {address.type} </h3>
              <MapComponent defaultCenter={{lat: address.street.lat, lng: address.street.lon}} />
            </div>
          )
        })
        
        }
      </div>
    )
  }
}


export default Address; 