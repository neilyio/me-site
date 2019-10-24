import React from "react";
import styled from "styled-components";

const HeadingSmall = (props) => {
    return (
        <h4>{props.children}</h4>
    )
};

const HeadingMedium = styled.h3`
	font-size: 4em;
	line-height: 1.25em;
	margin: 0;

`

const HeadingLarge = (props) => {
    return (
        <h2>{props.children}</h2>
    )
};


export { HeadingSmall, HeadingMedium, HeadingLarge };
