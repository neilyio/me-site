import React from "react";
import styled from "styled-components";


const Container = styled.div.attrs(props => ({
    paddingX: props.paddingX ? props.theme.spacing.md : props.theme.spacing.sm,
}))`
    padding-right: ${props => props.paddingX};
    padding-left: ${props => props.paddingX};
    height: ${props => props.theme.spacing.md};
    display: flex;
    align-items: center;
    justify-content: center;

    & * {
        color: white;
    }
    background-color: ${props => props.theme.palette.primary.main};
`;

const SquareButton = ({children, paddingX = true }) => (
    <Container paddingX={paddingX}>
      { children }
    </Container>
);

export default SquareButton;
