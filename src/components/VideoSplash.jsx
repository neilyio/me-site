import React from "react";
import styled from "styled-components";
import PageWrapper from "../layouts/PageWrapper.jsx";
import VideoPlexus from "../images/media.io_Plexus - 27669.mp4";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    background-color: ${props => props.overlay};
    box-sizing: border-box;
    padding-left: ${props => props.theme.spacing.xl}
    padding-right: ${props => props.theme.spacing.xl};

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        padding-left: ${props => props.theme.spacing.lg};
        padding-right: ${props => props.theme.spacing.lg};

    }
`;


const buffer = `

`;

const StyledVideo = styled.video`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 1;
    mix-blend-mode: overlay;
    filter: ${props => props.overlay && 'grayscale(100%)'};
`;

const StyledTitle = styled.h2`
    color: white;
    padding-bottom: ${props => props.theme.spacing.md};
`;

const StyledSubTitle = styled.p`
    color: white
`;

const TitleContainer = styled.div`
    @media(max-width: ${props => props.theme.breakpoints.md}) {
        max-width: 32em;    
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 32em;
    text-align: center;

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        text-align: left;        
    }
    
`;

const HeroTitleContainer = styled(TextContainer)`
    @media(min-width: ${props => props.theme.breakpoints.md}) {
        max-width: 100%;    
    }
`;


const VideoSplash = ({overlay = 'darkblue'}) => { 
    return (
        <PageWrapper>
          <Container overlay={overlay}>
            <HeroTitleContainer>
              <StyledTitle>We are all Media Empire.</StyledTitle>
            </HeroTitleContainer>          
            <TextContainer>
              <StyledSubTitle>
                Unifying the most important achievements in techonology, culture, intelligence, and militarized leadership.  Connecting the security of international dominance with the assurance of continued growth.<br/><br/>One spirit. One vision. One corporation.
              </StyledSubTitle>
            </TextContainer>
            <StyledVideo src={VideoPlexus} overlay={overlay} autoPlay loop muted/>
          </Container>
        </PageWrapper>
    ); 
};
export default VideoSplash;
