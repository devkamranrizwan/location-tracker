# Location Tracker
Create a location tracker using React and Nodejs. As a user, I should be able to see live location(marker on map).  For location feed, coordinates can be mocked on the backend.

# Build a React Map Location Tracker Application with Mock location data.

## Prerequisite
- [React](https://reactjs.org) installed on your machine, you can read up on how to do that [here](https://facebook.github.io/create-react-app/docs/getting-started)
- [NodeJS](https://nodejs.org) installed on your machine
- [NPM](https://npmjs.com) or [Yarn](https://yarnpkg.com) installed on your machine

## Getting Started
- Install the necessary node modules

```bash
npm install
```

## Setting Up Your Own Credentials

- Uncomment the pusher commented code and comment the websocket code to use pusher functionality.

- [Obtain Pusher Crendtials](https://pusher.com)

- Enter Pusher Credentials in `src/Map.jsx` and `server/server.js`

- [Obtain Google MAPs JavaScript API Credentials](https://developers.google.com/maps/documentation/javascript/get-api-key)

- Enter Google MAPs API Key in `src/Map.jsx`

## Setting Up the Backend
- Change Directory and install node modules

```bash
cd server
npm install
```

- Start Backend Server

```bash
node server.js
```

## Update React Application
- Update server Backend Server URLs (if changed) to match your server host in `src/Map.jsx`


## Start React Application
- Run the command
```bash
npm start
```

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
