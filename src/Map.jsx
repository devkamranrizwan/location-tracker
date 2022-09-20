import { useState, useEffect } from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";
//Following import required for pusher-js implementation
// import Pusher from "pusher-js";
import Marker from "./Marker";

const Container = styled.div`
  height: 600px;
  width: 100%;
`;

const Map = () => {
  const [latitude, setLatitude] = useState(31.471510867028744);
  const [longitude, setLongitude] = useState(74.27800644125901);
  const center = { lat: 12.9784155838887, lng: 77.5904541710211 };

  useEffect(() => {
    const exampleSocket = new WebSocket("ws://localhost:8082", "Json");
    exampleSocket.onopen = function () {
      console.log("connection opened");
    };
    exampleSocket.onmessage = function (ev) {
      const data = JSON.parse(ev.data);
      setLatitude(data.location.lat);
      setLongitude(data.location.lng);
      console.log("message recieved");
    };
    exampleSocket.onclose = function (ev) {
      console.log("connection closed");
    };
    exampleSocket.onerror = function (ev) {
      console.log("connection error");
    };

    return () => {
      exampleSocket.close();
    };
  }, []);

  //Following Commented Code is the same implementation but using Pusher-js

  // useEffect(() => {
  //   let pusher = new Pusher("64d972bdb5706ca54f3a", {
  //     authEndpoint: "http://localhost:3128",
  //     cluster: "ap2",
  //   });

  //   const presenceChannel = pusher.subscribe("tracking");

  //   presenceChannel.bind("pusher:subscription_succeeded", () => {
  //     console.log("Subscribed Successfully");
  //   });

  //   presenceChannel.bind("location-update", (body) => {
  //     console.log("Location Updated", body.location);
  //     setLatitude(body.location.lat);
  //     setLongitude(body.location.lng);
  //   });

  //   return () => {
  //     pusher.unsubscribe("tracking");
  //   };
  // }, []);

  return (
    <Container>
      <GoogleMap
        bootstrapURLKeys={{ key: "AIzaSyB380k8egJqyHAsHqM-cFhGE3Uq8sCxaA8" }}
        center={center}
        zoom={17}
      >
        <Marker key={latitude + longitude} title={`Kamran Rizwan`} lat={latitude} lng={longitude} />
      </GoogleMap>
    </Container>
  );
};

export default Map;
