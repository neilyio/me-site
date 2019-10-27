import React from "react";
import styled from "styled-components";
import { InfoCard } from "./InfoCard.jsx";


const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: ${props => props.theme.spacing.xs};
    grid-row-gap: ${props => props.theme.spacing.xs};
    box-sizing: border-box;

    @media(max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: 1fr 1fr;
        padding: 0 10%;
    }

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: 1fr;
        padding: 0 20%;
    }

    @media(max-width: ${props => props.theme.breakpoints.sm}) {
        padding: 0 10%;
    }

    @media(max-width: ${props => props.theme.breakpoints.sm}) {
        padding: 0;
    }
`;


const InfoCardGallery = ({ children }) => {
  return (
      <Container>
        { children }
      </Container>
  );
};

export default InfoCardGallery;
