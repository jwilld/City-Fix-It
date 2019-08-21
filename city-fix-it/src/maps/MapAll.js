import React, { Component } from "react"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%',
  };


class MapAll extends Component {



    
    render() { 
        return (
            <div className="MapAll-container">
                <h1>the map should go here</h1>
                <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />

                {/* end of map all container */}
            </div>






            //end of return
        )
        //end of render
    }
        //end of MapAll
    }
    
       

    export default GoogleApiWrapper({
        apiKey: 'AIzaSyAGIIycqco2n6BTluRgIHy_G7rjmFBerlk'
      })(MapAll);
      

