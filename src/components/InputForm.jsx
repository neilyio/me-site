import React from "react";
import styled from "styled-components";

const TopTitle = styled.small`
position: absolute;
top: calc(-1 * ${props => props.theme.spacing.sm});
text-transform: uppercase;
font-weight: bold;
color: ${props => props.color}
`;

const StyledInput = styled.input`
    display: block;
    height: ${props => props.theme.spacing.md};
    width: 15em;
    padding: 0 ${props => props.theme.spacing.sm};
    box-sizing: border-box;
    border: 1px solid black;
`;

const Container = styled.div`
position: relative;
`;

const InputForm = ({ title, titleColor, password, value, onChange, onSubmit}) => {
    return (
        <Container>
          { title && <TopTitle children={title} color={titleColor}/>}
          <StyledInput
            value={value}
            type={password && 'password'}
            onChange={e => e.key === 'Enter' ? onSubmit() : onChange(e.target.value)}/>
        </Container>
        
    );
};

export default InputForm;
