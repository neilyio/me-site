import React, { useState } from "react";
import styled from "styled-components";

const TopTitle = styled.small`
position: absolute;
top: calc(-1 * ${props => props.theme.spacing.sm});
text-transform: uppercase;
font-weight: bold;
`;

const StyledInput = styled.input`
    display: block;
    height: ${props => props.theme.spacing.md};
    width: 15em;
    padding: 0;
    box-sizing: border-box;
    border: 1px solid black;
`;

const Container = styled.div`
position: relative;

`;

const InputForm = ({ title='Subscribe to our latest insights' }) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <Container>
          { title && <TopTitle children={title}/>}
          <StyledInput value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        </Container>
        
    );
};

export default InputForm;
