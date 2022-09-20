import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  width: 50px;
`;

const Marker = ({ title }) => {
  return (
    <Container>
      <img
        style={{
          height: "100%",
        }}
        alt={title}
        src='https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png'
      />
      <h3>{title}</h3>
    </Container>
  );
};

export default Marker;
