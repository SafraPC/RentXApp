import React from "react";
import {
  Container,
  Details,
  Name,
  Brand,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";
import GasIcon from "../../assets/gasoline.svg";

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface Props {
  data: CarData;
}

const Car: React.FC<Props> = ({ data }) => {
  const { brand, name, rent, thumbnail } = data;
  return (
    <Container>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <About>
          <Rent>
            <Period>{rent.period}</Period>
            <Price>R$ {rent.price}</Price>
          </Rent>
          <Type>
            <GasIcon />
          </Type>
        </About>
      </Details>

      <CarImage
        source={{
          uri: thumbnail,
        }}
        resizeMode="contain"
      />
    </Container>
  );
};

export { Car };
