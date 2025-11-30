import React, { Component } from "react";

class Map extends Component {
  constructor(props) {
    super(props);
    this.googleMapRef = React.createRef();
  }

  componentDidMount() {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
    });
  }

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 14,
      center: {
        lat: 1.3289678,
        lng: 103.7519224,
      },
      disableDefaultUI: true,
    });

  createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: 1.3290202, lng: 103.7518699 },
      map: this.googleMap,
    });

  render() {
    return (
      <div
        ref={this.googleMapRef}
        style={{ height: "100%", width: "100%" }}
      />
    );
  }
}

export default Map;
