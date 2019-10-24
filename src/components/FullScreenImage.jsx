import React from "react";
import styled from "styled-components";

//Wrapper style allows image to reposition on window resize.
const Wrapper = styled.div`
    display: flex;
	position: absolute;
    justify-content: center;
    align-items: center;
    overflow: hidden;
	height: 100vh;
	width: 100vw;
	z-index: -1;
`


// Flex-shrink 0 ensures the image won't resize, but instead reposition.
const Img = styled.img`
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
`

const FullScreenImage = (props) => {
    return (
        <Wrapper>
          <Img src={props.src}/>
        </Wrapper>
    );
}

export default FullScreenImage;
