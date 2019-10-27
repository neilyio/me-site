import React from "react";
import styled from "styled-components";
import { MediumHeading, SmallHeading, NormalBody, SmallNormalBody, ItalicBody } from "../typography";

const TextContainer = styled.div`
    grid-area: text;
    width: 100%;
`;


const BodyContainer = styled.div`
    grid-area: text;
    width: 100%;
    margin-top: 1em;
`;


const StoryContainer = styled.div`
    display: grid;
    grid-template-areas: 
       "image"
       "text";
    grid-column-gap: 2em;
    grid-row-gap: 2em;
    position: relative;

    /* Box shadow settings for hover */

    &::after {
        content: "";
        position: absolute;
        top: -25px;
        left: -25px;
        width: calc(100% + 50px);
        height: calc(100% + 50px);
        box-shadow: ${props => props.theme.shadows.primary.main};
        opacity: 0;
        z-index: -1;
        transition:
            all 
            ${props => props.theme.transitions.duration.standard}
            ${props => props.theme.transitions.easing.easeIn};
    }

    &:hover::after {
        opacity: 1;
    }
`;

const ImageContainer = styled.div`
    grid-area: image;
    width: 100%;
    height: 100%;
    max-height: 330px;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    min-height: 100%;
    object-fit: cover;
`;

const HoverableTitle = styled.h3`
    &:hover {
        text-decoration: underline;
        color: ${props => props.theme.palette.primary.main};
    } 
`;

const Container = styled.div`
    display: grid;
    position:relative;
    grid-template-columns: 100%;
    grid-row-gap: 40px;
    grid-column-gap: 40px;
    z-index: 1;

    /* Select all direct children */
    & > * {
       grid-template-rows: 315px auto;
   
        h2, h3, h4, h5 { 
           font-size: 1.5em;
       }
    }
    
    @media (min-width: 780px) {
        grid-template-columns: 1fr 1fr 1fr;


        /* Select all but first two */
        & > *:nth-child(n+3) {
            grid-template-rows: 228px auto;
            h2, h3, h4, h5 { 
                font-size: 1.5em;
            }
        }  

        /* Select first child and second child */
        & > *:first-child, & > *:first-child + * {
            grid-column: span 3;
            grid-template-rows: 100%;
            grid-template-columns: 1fr 1fr;
            & ${BodyContainer} {
                width: 80%;
            }
            h2, h3, h4, h5 { 
                font-size: ${props => props.theme.typography.h3.fontSize};
            }  
        }
        
        /* Select first child */
        & > *:first-child {
            grid-template-areas: "image text";
        }
        
        /* Select second child */
        & > *:first-child + * {
            grid-template-areas: "text image";
        }
    }
`;


const StoryCardGallery = ({ stories, heroes }) => {
    return (
        <Container>
          { stories.map((el, index) => (
              <StoryContainer key={index}>
                <ImageContainer>
                  <Image src={el.imgSrc}/>
                </ImageContainer>
                <TextContainer>
                  { el.typeHeading && <SmallNormalBody children={el.typeHeading}/>}
                  { el.heading && <HoverableTitle children={el.heading}/> }
                  { el.body && <BodyContainer><p children={el.body}/></BodyContainer>}
                </TextContainer>
              </StoryContainer>
          )) }
        </Container>
      );
};

export default StoryCardGallery;
