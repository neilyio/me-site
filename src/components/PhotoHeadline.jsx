import React from "react";
import styled from "styled-components";
import { MediumHeading, SmallHeading, ExtraSmallHeading, NormalBody } from "../typography";
import ButtonWordLink from "../components/ButtonWordLink.jsx";

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;

    @media(max-width: 1180px) {
        width: 100vw;
    }
`;

const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 400px;
    overflow: hidden;
`

const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    position: relative;
    object-fit: cover;
`;

const TextBoxContainer = styled.div`
    z-index: 10;
    background-color: white;
    width: calc(100% - calc(${props=>props.theme.spacing.lg}*2));
    margin-top: calc(-1 * ${props=>props.theme.spacing.lg});
    margin-bottom: ${props=>props.theme.spacing.md};
    padding: ${props => props.theme.spacing.lg};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

@media (max-width: ${props=>props.theme.breakpoints.md}) {
    width: calc(100% - calc(${props=>props.theme.spacing.md}*2));
    margin-top: calc(-1 * ${props=>props.theme.spacing.md});
    padding: ${props => props.theme.spacing.md};
}
`;

const TextContainer = styled.div`
    margin-bottom: ${props => props.theme.spacing.md};
`;

const shouldShowTextBox = (heading, subHeading, body, overlayHeading) => {
    if (subHeading || body) { return true; }
    if (heading && !overlayHeading) { return true; }
    return false;
};

const TextBox = ({ src, heading, subHeading, body, overlayHeading, linkText, linkURL }) => {
    if (!shouldShowTextBox(src, heading, subHeading, body, overlayHeading)) {
        return null;
    }
    return (
        <TextBoxContainer>
          {heading && <TextContainer><h3 children={heading}/></TextContainer>}
          {subHeading && <TextContainer><h5 children={subHeading}/></TextContainer>}
          {body && <TextContainer><p children={body}/></TextContainer>}
          {linkText && <TextContainer><ButtonWordLink children={linkText} href={linkURL}/></TextContainer>}
        </TextBoxContainer>        
    );
};

const PhotoHeadline = ({ src, heading, subHeading, body, overlayHeading, linkText, linkURL }) => {
    
    linkText = "Learn More";
    return (
        <Container>
          <BackgroundImageContainer>
            <BackgroundImage src={src}/>
          </BackgroundImageContainer>
          <TextBox heading={heading} subHeading={subHeading} body={body} overlayHeading={overlayHeading} linkText={linkText} linkURL={linkURL}/>
        </Container>
    );
};

export default PhotoHeadline;
