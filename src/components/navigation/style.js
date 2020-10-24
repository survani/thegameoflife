import styled from "styled-components";
import {Link} from "react-router-dom";

export const Logo = styled.h2 `
color: #5C5CAD;
text-align: center;
font-size: 4.5rem;
font-family: 'Staatliches', cursive;
margin-top: 1rem;
`

export const NavigationLinks = styled.nav `
text-align: center;
margin-bottom: 1rem;
font-size: 1.2rem;
`

export const Links = styled(Link) `
text-decoration: none;
color: black;
font-family: 'Staatliches';
font-weight: 500;
margin-left: 0.5rem;
:hover {
color: #5C5CAD;
}
`