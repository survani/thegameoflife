import React from "react";
import {
  BgImage, ButtonContainer,
  Container,
  PlayButton,
  SubText,
  TextContainer,
  Title,
} from "./style";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <Title> Conway's Game of Life</Title>
          <ButtonContainer>
            <Link to="/game">
              <PlayButton> Play </PlayButton>
            </Link>
            <Link to="/about">
              <PlayButton> About </PlayButton>
            </Link>
            <Link to="/about">
              <PlayButton> Rules </PlayButton>
            </Link>
          </ButtonContainer>

          <SubText>
            This game was created by John Horton Conway in 1970. This is my
            implementation of the game of life.
          </SubText>
        </TextContainer>
        <BgImage
          src={
            "https://images.pexels.com/photos/3178786/pexels-photo-3178786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
        />
      </Container>
    </>
  );
};

export default LandingPage;
