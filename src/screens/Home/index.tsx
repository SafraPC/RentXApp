import React from "react";
import { Container, Header } from "./styles";
import Logo from "../../assets/logo.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
    </Container>
  );
};

export default Home;
