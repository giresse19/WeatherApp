import React, {Component} from 'react';

class Googlemap extends Component {
    // life-cycle method..auto called after rendering
    componentDidMount() {
        //how 3rd party libs which dnt knnow react eco-sys are used
        new google.maps.Map(this.refs.map, {
            zoom:12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
 render() {
     return <div ref="map" />
 }
}

export default Googlemap;