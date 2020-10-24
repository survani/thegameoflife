import React from "react";
import Navigation from "../navigation/navigation";
import {
    ContentContainer,
    InnerContent,
    MainImage,
    TextContainer,
    Title,
    SubText,
    BottomContent, RulesContainer, AliveBlock, Text,
} from "./style";

const About = () => {
  return (
    <>
      <Navigation />
      <ContentContainer>
        <InnerContent>
          <MainImage
            src={
              "https://static01.nyt.com/images/2020/04/18/obituaries/14Conway1/14Conway1-mediumSquareAt3X-v2.jpg"
            }
          />
          <TextContainer>
            <Title> About Conway's Game of Life? </Title>
            <SubText>
              "The Game of Life, also known simply as Life, is a cellular
              automaton devised by the British mathematician John Horton Conway
              in 1970.[1] It is a zero-player game, meaning that its evolution
              is determined by its initial state, requiring no further input.
              One interacts with the Game of Life by creating an initial
              configuration and observing how it evolves. It is Turing complete
              and can simulate a universal constructor or any other Turing
              machine." -{" "}
              <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
                {" "}
                Source{" "}
              </a>
            </SubText>
          </TextContainer>
        </InnerContent>
      </ContentContainer>
        <Title> Rules </Title>
      <BottomContent>
          <RulesContainer>
              <AliveBlock> Alive </AliveBlock>
              <Text> - Any live cell with two or three live neighbors lives.</Text>
              <Text> - Any dead cell with exactly three live neighbors becomes a live cell.</Text>
          </RulesContainer>

          <RulesContainer>
              <AliveBlock> Death </AliveBlock>
              <Text> - Any live cell with more than three live neighbors dies. </Text>
              <Text> - Any live cell with fewer than two live neighbors dies. </Text>
          </RulesContainer>
      </BottomContent>
    </>
  );
};

export default About;
