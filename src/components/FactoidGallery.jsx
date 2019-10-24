import React from "react";
import styled from "styled-components";
import { FactoidHeading, FactoidSubHeading } from "./Factoid.jsx";

const Container = styled.div.attrs((props) => ({
    verticalBreakQuery: `(max-width: ${props.theme.breakpoints.sm})`,
    smallFontQuery: `(max-width: ${props.theme.breakpoints.md}) and (min-width: ${props.theme.breakpoints.md})`,
    ...props
}))`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    overflow: hidden;
    margin-top: ${props => props.theme.spacing.xl};
    
    @media ${props => props.verticalBreakQuery} {
      flex-direction: column;
    }

    & > *:first-child {
        margin-left: -1px;
        @media ${props => props.verticalBreakQuery} {
            margin-left: 0;
            margin-top: -1px;
        }
    }
    
    & > * {
        width: calc(1/3*100% - 5px);
        border-left: 1px solid grey;

        @media ${props => props.verticalBreakQuery} {
            width: 100%;
            border-left: 0;
            border-top: 1px solid grey;
            padding-top: ${props => props.theme.spacing.lg};
            padding-bottom: ${props => props.theme.spacing.lg};
        }
    }

    & ${FactoidHeading} {
      @media ${props => props.smallFontQuery} {
        font-size: 3em;
      }    
    }
    & ${FactoidSubHeading} {
      @media ${props => props.smallFontQuery} {
        font-size: 1.5em;
      }      
    }
`;

const FactoidGallery = ({ children }) => {
    return (
        <Container>
          { children.map((el, index) => (index <= 3 ? el : null))}
        </Container>
    );
};  
export default FactoidGallery;
