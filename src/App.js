import { useState } from "react";
import styled from "styled-components";
import Map from "./Map";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  const [showMap, setShowMap] = useState(false);
  return (
    <Container>
      <Button onClick={() => setShowMap(!showMap)}>{showMap ? "Close Map" : "Track Kamran"}</Button>
      {showMap && <Map />}
    </Container>
  );
}

export default App;
