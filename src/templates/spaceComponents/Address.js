import React from 'react';
import MapComponent from './map';
import './Address.css';

 
class Address extends React.Component {
  
  render() {


    return (
      <div className='addresses-container' style={{display: 'flex', 'justify-content': 'space-between'}}>
        {this.props.addresses.map((address, i) => { 
          if(i === 0) { 
            return (
              <div key={address.id} style={{width: '100%'}} className='addresses'> 
                <h3> {address.title} </h3>
                <MapComponent defaultCenter={{lat: address.street.lat, lng: address.street.lon}} />
              </div>
            )
          } else {
            return (
              <div key={address.id} style={{width: '49%'}} className='addresses'> 
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