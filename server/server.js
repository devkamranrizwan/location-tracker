const express = require("express");
const WebSocket = require("ws");
const Pusher = require("pusher");

// create a express application
const app = express();

//Mock Track Data
const trackData = [
  { lat: 12.9802347063322, lng: 77.5907760360903 },
  { lat: 12.9793774204024, lng: 77.5910979011596 },
  { lat: 12.9795865148043, lng: 77.5911622741734 },
  { lat: 12.9797746996155, lng: 77.5916987159555 },
  { lat: 12.9801301594259, lng: 77.5919776656823 },
  { lat: 12.9798374278543, lng: 77.5922780730802 },
  { lat: 12.9791683258247, lng: 77.5920849540387 },
  { lat: 12.9787501361417, lng: 77.5917845466407 },
  { lat: 12.9784155838887, lng: 77.5912481048586 },
  { lat: 12.9784783124705, lng: 77.5913768508863 },
  { lat: 12.9783319457552, lng: 77.5912266471873 },
  { lat: 12.978394674358, lng: 77.591054985817 },
  { lat: 12.9779555738058, lng: 77.5909262397893 },
  { lat: 12.9776210204837, lng: 77.5904541710211 },
  { lat: 12.9774746532636, lng: 77.5901537636231 },
  { lat: 12.9761573444059, lng: 77.5872569779997 },
  { lat: 12.9764291706147, lng: 77.5866347055324 },
  { lat: 12.9766382674962, lng: 77.5863986711483 },
  { lat: 12.9771191896563, lng: 77.5857120256672 },
];
let dataIndex = 0;

const trackerWebsocket = new WebSocket.Server({ port: 8082 });
trackerWebsocket.on("connection", (ws) => {
  console.log("Connected Successfully");

  setInterval(() => {
    ws.send(JSON.stringify({ location: trackData[dataIndex] }));
    dataIndex++;
    if (dataIndex === trackData.length) {
      dataIndex = 0;
    }
  }, 3000);

  ws.on("close", () => {
    console.log("Connection closed successfully");
  });
});

//Following Commented Code is the same implementation but using Pusher-js

// initialize pusher
// let pusher = new Pusher({
//   appId: "1479066",
//   key: "64d972bdb5706ca54f3a",
//   secret: "b1d9ecd11f404d169873",
//   cluster: "ap2",
//   useTLS: true,
// });

// let dataIndex = 0;

// setInterval(() => {
//   pusher.trigger("tracking", "location-update", {
//     location: trackData[dataIndex],
//   });
//   dataIndex++;
//   if (dataIndex === trackData.length) {
//     dataIndex = 0;
//   }
//   console.log("hello from socket");
// }, 3000);

let port = 3128;
app.listen(port);
console.log("listening");
