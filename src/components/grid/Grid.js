import React, { useState, useCallback, useRef } from "react";
import produce from "immer";
import {
  GridContainer,
  GridContent,
  StartButton,
  ControlsContainer,
  ControlsTitle,
  GenerationContainer,
  BottomContent,
  GenerationText,
  GenerationCounter,
  AfterClickedGrid,
  OptionsContainer,
  OptionsTitle,
  SpeedContainer,
  SpeedText,
  SpeedCounter,
  GridSizeContainer, GridSizeText, GridSizeCounter,
} from "./style";

// default variables for 'rows', 'columns', 'speed'
let numberOfRows = 25;
let numberOfColumns = 25;
let speed = 50;

//grid points directions for the neighbors.
const checkPoints = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

const Grid = () => {
  // sets the grid content initial state to not be filled both the numberOfRows and numberOfColumns
  const [gridContent, setGridContent] = useState(
    Array.from({ length: numberOfRows }).map(() =>
      Array.from({ length: numberOfColumns }).fill(0)
    )
  );
  // is it running on its initial state?
  const [running, setRunning] = useState(false);

  // This is used to keep track of the state of the generation tracker.
  const [generations, setGenerations] = useState(0);

  const isRunning = useRef(running);
  isRunning.current = running;

  // Random Helper Function
  const random = () => {
    setGridContent((grid) => {
      return produce(grid, (gridCopy) => {
        for (let i = 0; i < numberOfRows; i++) {
          for (let c = 0; c < numberOfColumns; c++) {
            gridCopy[i][c] = Math.floor(Math.random() * 1.2 );
          }
          setGenerations(0);
        }
      });
    });
  };

  // Faster Helper Function
  const faster = () => {
    speed = 20;
    setRunning(running);
  };

  // Slower Helper Function
  const slower = () => {
    speed = 800;
    setRunning(running);
  };

  // 25 x 25 board
  const typeTwenty = () => {
    numberOfRows = 25;
    numberOfColumns = 25;
    setGridContent(
      Array.from({ length: numberOfRows }).map(() =>
        Array.from({ length: numberOfColumns }).fill(0)
      )
    );
  };

  // 50 x 50 board
  const typeFifty = () => {
    numberOfRows = 50;
    numberOfColumns = 50;
    setGridContent(
      Array.from({ length: numberOfRows }).map(() =>
        Array.from({ length: numberOfColumns }).fill(0)
      )
    );
  };

  const startSimulation = useCallback(() => {
    if (!isRunning.current) {
      return null;
    }
    setGridContent((g) => {
      return produce(g, (gridCopy) => {
        // 0(n^2) used here.
        for (let r = 0; r < numberOfRows; r++) {
          for (let c = 0; c < numberOfColumns; c++) {
            let proximate = 0;
            checkPoints.forEach(([x, y]) => {
              const newI = r + x;
              const newC = c + y;
              if (newI >= 0 && newI < numberOfRows && newC >= 0 && newC < numberOfColumns) {
                proximate += g[newI][newC];
              }
            });
            // if less than 2 or greater than 3 the cell dies.
            if (proximate < 2 || proximate > 3) {
              gridCopy[r][c] = 0;

            } else if (g[r][c] === 0 && proximate === 3) {
              gridCopy[r][c] = 1;
            }
          }
        }
      });
    });
    // checks the past generation count and add 1 as time passes.
    setGenerations((past) => past + 1);
    setTimeout(startSimulation, speed);
  }, []);

  return (
    <>
      <GridContainer>
        <GridContent
          style={{ gridTemplateColumns: `repeat(${numberOfColumns}, 22px)` }}
        >
          {gridContent.map((rows, i) =>
            rows.map((col, k) =>
              running ? (
                <AfterClickedGrid
                  style={{
                    width: 22,
                    height: 22,
                    background: gridContent[i][k] ? "#5C5CAD" : "white",
                    border: "1px solid #46468f",
                  }}
                />
              ) : (
                <AfterClickedGrid
                  style={{
                    width: 22,
                    height: 22,
                    background: gridContent[i][k] ? "#5C5CAD" : "white",
                    border: "1px solid #46468f",
                  }}
                  onClick={() => {
                    const newGrid = produce(gridContent, (gridBoxCopy) => {
                      gridBoxCopy[i][k] = gridBoxCopy[i][k] ? 0 : 1;
                    });
                    setGridContent(newGrid);
                  }}
                />
              )
            )
          )}
        </GridContent>
      </GridContainer>
      <BottomContent>
        <ControlsContainer>
          <ControlsTitle> Controls </ControlsTitle>
          <StartButton
            onClick={() => {
              speed = 50;
              setRunning(!running);
              if (!running) {
                isRunning.current = true;
                startSimulation();
              }
            }}
          >
            {running ? "Stop" : "Start"}
          </StartButton>

          <StartButton onClick={faster}> Faster </StartButton>
          <StartButton onClick={slower}> Slower </StartButton>
          <StartButton
            onClick={() => {

              setGenerations(0);
              setRunning(false);
              setGridContent(
                Array.from({ length: numberOfRows }).map(() =>
                  Array.from({ length: numberOfColumns }).fill(0)
                )
              );
            }}
          >
            Start Over
          </StartButton>
          <StartButton onClick={random}>Random</StartButton>
        </ControlsContainer>
        <OptionsContainer>
          <OptionsTitle> Options </OptionsTitle>
          <StartButton onClick={typeTwenty}>25x25</StartButton>
          <StartButton onClick={typeFifty}>50x50</StartButton>
        </OptionsContainer>
        <GenerationContainer>
          <GenerationText>Generations</GenerationText>
          <GenerationCounter> {generations}</GenerationCounter>
        </GenerationContainer>

        <SpeedContainer>
          <SpeedText> Speed </SpeedText>
          <SpeedCounter>{speed}/ms</SpeedCounter>
        </SpeedContainer>

        <GridSizeContainer>
          <GridSizeText> Current Grid Size </GridSizeText>
          <GridSizeCounter>{numberOfRows}x{numberOfColumns}</GridSizeCounter>
        </GridSizeContainer>
      </BottomContent>
    </>
  );
};

export default Grid;
