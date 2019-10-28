import React from "react";
import styled from "styled-components";


const Container = styled.div.attrs(props => ({
    paddingX: props.paddingX ? props.theme.spacing.md : props.theme.spacing.sm,
    colorDark: props.theme.palette.primary.main,
    colorLight: 'white',
}))`
    padding-right: ${props => props.paddingX};
    padding-left: ${props => props.paddingX};
    height: ${props => props.theme.spacing.md};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${props => props.invert ? props.colorLight : props.colorDark };

    & * {
        color: ${props => props.invert ? props.colorDark : props.colorLight};
    }

    &:hover {
        & * {
            color: ${props => props.invert ? props.colorLight : props.colorDark};
        }
        background-color: ${props => props.invert ? props.colorDark : props.colorLight};
    }
`;

const SquareButton = ({children, paddingX = true, invert, onClick}) => (
    <Container paddingX={paddingX} invert={invert} onClick={onClick}>
      { children }
    </Container>
);

export default SquareButton;
