import React from "react";
import styled from "styled-components";
import { SmallBoldBodyLink } from "../typography";
import { FaArrowRight } from "react-icons/fa";

const StyledButton = styled(SmallBoldBodyLink)`
display: flex;
align-items: center;
`;

const StyledArrow = styled(FaArrowRight)`
    margin: 0;
    margin-left: ${props => props.theme.spacing.md};
    color: ${props => props.theme.palette.primary.main};
`;

const ButtonWordLink = ({ children, href}) => {

    return (
        <StyledButton href={href}>
          { children }
          <StyledArrow/>
        </StyledButton>
    );
};

export default ButtonWordLink;
