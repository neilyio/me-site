import React from "react";
import styled from "styled-components";
import CityImage from "../images/city-night-1.jpg";
import FullScreenImage from "./FullScreenImage.jsx";
import MoleculeImage from "../images/molecule_PNG15_1.png";
import HeliImage from "../images/aircraft-aviation-flight-2906726.png";
import { Heading, Text } from "rebass";
import { HeadingSmall, HeadingMedium } from "../elements";

const Wrapper =styled.div`
	display: flex;
	background: linear-gradient(160deg, rgba(2,0,36,1) 30%, rgba(56,56,130,1) 98%);
	overflow: hidden;
	height: 100vh;
	width: 100vw;
`
const TextWrapper = styled.div`
	display: flex;
	position: relative;
	width: 50%;
	height: 100%;
	@media (max-width: 600px) {
		width: 60%;
	}
`

const ImageWrapper = styled.div`
	display: block;
	position: relative;
	width: 50%;
	height: 100%;
	@media (max-width: 600px) {
		width: 40%;
	}
`

const TextBoxBase = styled.div.attrs((props) => ({
    left: '2%',
    top: '40%'
    
}))`
	display: flex;
	color: white;
	flex-direction: column;
	position: absolute;
	left: ${props => props.left};
	top: ${props => props.top};;
	@media (max-width: 1080px) {
		bottom: 12%;
		font-size: 0.75em;
	}
	@media (max-width: 800px) {
		bottom: 8%;
		font-size: 0.6em;
	}
	@media (max-width: 650px) {
		bottom: 5%;
		font-size: 0.5em;
	}
`


const HeroImageBase = styled.img.attrs((props) => ({

}))`
	position: absolute;
	max-width: 650px;
	width: 100%;
	bottom: 10%;
	@media (max-width: 1100px) {
		width: 110%;
	}
	@media (max-width: 900px) {
		width: 120%;
	}
	@media (max-width: 750px) {
		width: 130%;
	}
	@media (max-width: 600px) {
		width: 180%;
	}	
`


const TitleMainMedium = styled(HeadingMedium)`
	padding-bottom: 0.25em;
`

const HomeSplashLayout = ({flipped = true, styledImg = null, styledText = null}) => {
    let sections;
    const TextHalf = (<TextWrapper key={0}>{ styledText }</TextWrapper>);
    const ImageHalf = (<ImageWrapper key={1}>{ styledImg }</ImageWrapper>);
    sections = flipped ? [ImageHalf, TextHalf] : [TextHalf, ImageHalf];

    return (<Wrapper>{ sections }</Wrapper>);
};

const HomeSplashText = ({ title = "", body = "" }) => {
    return (
        <TextBoxBase>
          <TitleMainMedium>{title}</TitleMainMedium>
          <Text>{body}</Text>
        </TextBoxBase>
    );
}

const HomeSplashImage = ({ src = null, styledClass =  null }) => {
   return ( <HeroImageBase src={src}/> );
};

const HomeSplash = ({ title = "Media Empire acquires WokeCRISPER.", body = "See how the new partnership will help you take control of your DNA."  }) => {
    return (
        <HomeSplashLayout
          flipped={true} 
          styledImg={(<HomeSplashImage src={MoleculeImage}/>)}
          styledText={(<HomeSplashText title={title} body={body}/>)}
        />
    );
}

export default HomeSplash;
