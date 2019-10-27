import React from "react";
import styled from "styled-components";
import { SmallHeading, BoldBody, SmallNormalBody, SmallBoldBody } from "../typography";

const InfoCardContainer = styled.div.attrs((props) => ({
   background: props.background || 'white'
}))`

    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background: ${props => props.background};
    width: 100%;
    height: 100%;
    padding: 3em;
    box-sizing: border-box;
    text-align: center;
    z-index: 1;

    /* Box shadow settings for hover */

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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

const InfoCardPhoto = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: ${props => props.theme.spacing.md};
    clip-path: circle(100px at center);
`;

const InfoCardHeading = styled.h4`
    margin: 0;
    margin-bottom: 0.5em;

    &:hover {
        color: ${props => props.theme.palette.primary.main};
    }
`;

const InfoCardSubHeading = styled.small`
    margin: 0;
    font-weight: bold;
`;

const InfoCardBody = styled.p`
    margin: 0;
    line-height: 1.5em;
`;

const InfoCardDivider = styled.div`
    background-color: #E6E6E6;
    margin: 16px;
    width: 55px;
    height: 1px;
`;

const InfoCard = ({ imgSrc, heading, subHeading, body }) => {
  return (
      <InfoCardContainer>
        { imgSrc && <InfoCardPhoto src={imgSrc}/> }
        <InfoCardHeading children={heading}/>
        <InfoCardSubHeading children={subHeading}/>
        <InfoCardDivider/>
        <InfoCardBody children={body}/>
      </InfoCardContainer>
  );
};

export { InfoCardPhoto, InfoCardContainer };
export default InfoCard;
