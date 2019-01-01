import React from 'react';
import MapComponent from './map';


 
class Address extends React.Component {
  
  render() {


    return (
      <div className='addresses-container' style={{display: 'flex', 'justifyContent': 'space-between'}}>
        {this.props.addresses.map((address, i) => { 
          if(i === 0 && this.props.addresses.length % 2 !== 0) { 
            return (
              <div key={address.id} style={{width: '100%'}} className='addresses'> 
                <h3> {address.title} </h3>
                <MapComponent defaultCenter={{lat: address.street.lat, lng: address.street.lon}} />
              </div>
            )
          } else {
            return (
              <div key={address.id} style={{width: '49.5%'}} className='addresses'> 
                <h3> {address.title} </h3>
                <MapComponent defaultCenter={{lat: address.street.lat, lng: address.street.lon}} />
              </div>
            )
          }
        })
        
        }
      </div>
    )
  }
}


export default Address; 