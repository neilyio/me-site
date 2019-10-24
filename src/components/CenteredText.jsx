import React from "react";
import styled from "styled-components";
import { NormalBody } from "../typography";

const CenteredTextWrapper = styled(NormalBody)`
    display: flex;
    max-width: 725px;
    justify-content: center;
    text-align: center;
`;

const CenteredText = (props) => {
   return (
       <CenteredTextWrapper>
         { props.children }
       </CenteredTextWrapper>
   );
};

export default CenteredText;
