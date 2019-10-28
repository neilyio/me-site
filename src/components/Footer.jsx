import React from "react";
import styled from "styled-components";
import ScrollSection from "../layouts/ScrollSection.jsx";
import theme from "../theme";
import SquareButton from "../components/SquareButton.jsx";
import InputForm from "../components/InputForm.jsx";
import { FaAngleDoubleRight, FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Container = styled.div`

`;

const ConnectContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

@media(max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;

    & > *:first-child {
        padding-bottom: ${props => props.theme.spacing.md};
    }
}
`;

const SubscribeContainer = styled.div`
display: flex;
`;

const Spacer = styled.div`
flex-grow: 1;
`;

const ConnectText = styled.h3`
    color: ${props => props.theme.palette.grey[900]};
    margin-right: ${props => props.theme.spacing.md};
`;


const MediaEmpireLogoContainer = styled.div`
flex-grow: 2;
`;

const MediaEmpireLogo = styled.h4`

`;

const FooterLinksContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;

& * {
    padding-right: ${props => props.theme.spacing.md};
}
`;

const SocialContainer = styled.div`
display: flex;
align-items: center;

& * {
    padding-left: ${props => props.theme.spacing.xs};
}
`;

const LogoSubscribeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const RowContainerLogo = styled.div`
    display: flex;
    justify-content: space-between;


    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        flex-direction: column;
        justify-content: flex-start;
    }

`;

const RowContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;


    & > * {
        padding-bottom: ${props => props.theme.spacing.md}
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

const BorderedScrollSection = styled(ScrollSection)`
    border-top: 1px solid black;
`;

const Footer = () => (
    <React.Fragment>
      <ScrollSection color={theme.palette.grey['200']}>
        <ConnectContainer>
          <ConnectText>Connect with Media Empire in your country</ConnectText>
          <SquareButton><h5>Contact</h5></SquareButton>
        </ConnectContainer>
      </ScrollSection>

      <BorderedScrollSection>
        <LogoSubscribeContainer>
          <RowContainer>
            <MediaEmpireLogoContainer>
              <MediaEmpireLogo>Media<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empire</MediaEmpireLogo>
            </MediaEmpireLogoContainer>    
            <SubscribeContainer>
              <InputForm title='Subscribe to our latest insights'/>
              <SquareButton paddingX={false}>
                <FaAngleDoubleRight/>
              </SquareButton>
            </SubscribeContainer>
          </RowContainer>
          <RowContainer>
            <FooterLinksContainer>
              <a children='Contact Us'/>
              <a children='FAQ'/>
              <a children='Privacy Policy'/>
              <a children='Cookie Policy'/>
              <a children='Terms of Use'/> 
            </FooterLinksContainer>
            <SocialContainer>
              <FaFacebook/>
              <FaTwitter/>
              <FaLinkedinIn/>
              <FaYoutube/>
            </SocialContainer>
          </RowContainer>          
        </LogoSubscribeContainer>
      </BorderedScrollSection>
    </React.Fragment>
);

export default Footer;
