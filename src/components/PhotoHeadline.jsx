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
    position: relative;
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

const TextBoxLargeHeading = styled(MediumHeading)`
    font-family: "PT Serif";
    margin-bottom: ${props => props.theme.spacing.md};
`;

const TextBoxSubHeading = styled(ExtraSmallHeading)`
    margin-bottom: ${props => props.theme.spacing.md};
`;

const TextBoxBody = styled(NormalBody)`
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
          {heading ? <TextBoxLargeHeading children={heading}/> : null}
          {subHeading ? <TextBoxSubHeading children={subHeading}/> : null}
          {body ? <TextBoxBody children={body}/> : null}
          {linkText ? <ButtonWordLink children={linkText} href={linkURL}/> : null}
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
