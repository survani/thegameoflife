import styled from "styled-components"

export const BgImage = styled.img `
max-width: 100%;
width: 100%;
height: 100vh;
object-fit: cover;
`

export const Container = styled.div `

`

export const TextContainer = styled.div `
  align-items: center;
  flex-direction: column;
  color: white;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 1;
  font-family: 'Staatliches', cursive;
`

export const ButtonContainer = styled.div `
display: flex;
`

export const Title = styled.h1 `
font-size: 6rem;
margin-bottom: 1rem;
`

export const SubText = styled.p `
margin-top: 3rem;
font-size: 1.5rem;

`

export const PlayButton = styled.button `
color: white;
font-size: 1.8rem;
background: none;
border: 2px solid white;
width: 15rem;
padding: 0.5rem;
border-radius: 50rem;
margin-right: 1rem;
:hover {
background: white;
color: black;
}
`