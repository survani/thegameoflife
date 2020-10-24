import styled from "styled-components";

export const GridContainer = styled.div`
  background: #f0f0f0;
  border: 1px solid #e7e7e7;
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const GridContent = styled.div`
  display: grid;
`;

// Controls

export const StartButton = styled.button`
  background: none;
  border: 2px solid #5c5cad;
  border-radius: 5px;
  margin-right: 0.5rem;
  padding: 0.5rem;
  color: #5c5cad;
  font-family: "Staatliches", cursive;
  font-size: 1rem;
`;

export const ControlsContainer = styled.div`
  width: 380px;
  background: #f0f0f0;
  padding: 1rem;
  border: 1px solid #e7e7e7;
  border-radius: 1.5%;
  margin-right: 1rem;
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const ControlsTitle = styled.p`
  font-size: 25px;
  font-family: "Staatliches", cursive;
  margin-bottom: 1rem;
`;


// Generation Container

export const GenerationContainer = styled.div`
  width: 150px;
  background: #f0f0f0;
  padding: 1rem;
  border: 1px solid #e7e7e7;
  border-radius: 1.5%;
  
`;

export const GenerationText = styled.p`
  font-size: 25px;
  text-align: center;
  font-family: "Staatliches", cursive;
  margin-bottom: 0.5rem;
`;

export const GenerationCounter = styled.p`
  font-size: 3.2rem;
  font-family: "Staatliches", cursive;
  color: #5c5cad;
  text-align: center;
`;

export const AfterClickedGrid = styled.div`
width: 22,
height: 22,
background: gridContent[i][k] ? "#5C5CAD" : "white",
border: "1px solid #46468f",
`;

// Options Section

export const OptionsContainer = styled.div `
  width: 130px;
  background: #f0f0f0;
  padding: 1rem;
  border: 1px solid #e7e7e7;
  border-radius: 1.5%;
  margin-right: 1rem;
`

export const OptionsTitle = styled.p`
  font-size: 25px;
  font-family: "Staatliches", cursive;
  margin-bottom: 1rem;
`;

// Speed Container

export const SpeedContainer = styled.div`
  width: 150px;
  background: #f0f0f0;
  padding: 1rem;
  border: 1px solid #e7e7e7;
  border-radius: 1.5%;
  margin-left: 1rem;
  
`;

export const SpeedText = styled.p`
  font-size: 25px;
  text-align: center;
  font-family: "Staatliches", cursive;
  margin-bottom: 0.5rem;
`;

export const SpeedCounter = styled.p`
  font-size: 3.2rem;
  font-family: "Staatliches", cursive;
  color: #5c5cad;
  text-align: center;
`;

// Current Grid Size

export const GridSizeContainer = styled.div`
  width: 200px;
  background: #f0f0f0;
  padding: 1rem;
  border: 1px solid #e7e7e7;
  border-radius: 1.5%;
  margin-left: 1rem;
  
`;

export const GridSizeText = styled.p`
  font-size: 25px;
  text-align: center;
  font-family: "Staatliches", cursive;
  margin-bottom: 0.5rem;
`;

export const GridSizeCounter = styled.p`
  font-size: 3.2rem;
  font-family: "Staatliches", cursive;
  color: #5c5cad;
  text-align: center;
`;