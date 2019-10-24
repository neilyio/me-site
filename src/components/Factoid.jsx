import React from "react";
import styled from "styled-components";
import { LargeHeading, ExtraSmallHeading, LightBody } from "../typography";

const FactoidWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: center;
    padding-bottom: ${props => props.theme.spacing.md};
    padding-top: ${props => props.theme.spacing.md};
    box-sizing: border-box;
`;

let FactoidHeading = styled(LargeHeading)`
    color: ${props => props.theme.palette.primary.main};
`;
let FactoidSubHeading = styled(ExtraSmallHeading)`
    padding-top: ${props => props.theme.spacing.sm};
`;

const FactoidBody = styled(LightBody)`
    padding-top: ${props => props.theme.spacing.md};
`;

const Factoid = ({ heading, subHeading, body }) => {

    return (
        <FactoidWrapper>
          <FactoidHeading children={heading}/>
          <FactoidSubHeading children={subHeading}/>
          <FactoidBody children={body}/>
        </FactoidWrapper>
    );
};

export { FactoidHeading, FactoidBody, FactoidSubHeading };
export default Factoid;
