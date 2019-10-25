import React from "react";
import styled from "styled-components";
import { BoldBody } from "../typography";

const ScrollSectionContainer = styled.div.attrs((props) => ({
    color: props.color || "white"
}))`
    background-color: ${props => props.color};
    padding: ${props => props.theme.spacing.xl};
    display: flex;
    flex-direction: column;
    align-items: center;

@media(max-width: ${props => props.theme.breakpoints.lg}) {
    padding-left: ${props => props.theme.spacing.md};
    padding-right: ${props => props.theme.spacing.md};
}
@media(max-width: ${props => props.theme.breakpoints.md}) {
    padding-left: ${props => props.theme.spacing.md};
    padding-right: ${props => props.theme.spacing.md};
}
`;

const ScrollSectionInnerContainer = styled.div`
    max-width: 1228px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const HeadingContainer = styled.div`
    display: flex;
    width: 100%;
    border-top: ${props => props.position == 'center' ?'0' :  '1px solid black'};
    border-bottom: ${props => '0'};
    justify-content: ${props => props.position == 'center' ? 'center' : 'left'};
    margin-bottom: ${props => props.position == 'center' ? props.theme.spacing.md : props.theme.spacing.md};
    padding-top: ${props => props.position == 'center' ? '0' : props.theme.spacing.sm};
`;

const HeadingText = styled(BoldBody)`
    text-transform: uppercase;
`;

const ScrollSectionHeading = ({ children, position = 'center'  }) => {
    return (
        <HeadingContainer position={position}>
          <HeadingText children={children} />
        </HeadingContainer>        
    );
};

const ScrollSection = ({ className, children, color, heading }) => {
    return (
        <ScrollSectionContainer className={className} color={color}>
          <ScrollSectionInnerContainer>
            { heading ? <ScrollSectionHeading children={heading}/> : null }
            { children }
          </ScrollSectionInnerContainer>
        </ScrollSectionContainer>
    );
};

export { ScrollSectionHeading };
export default ScrollSection;
