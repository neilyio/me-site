import styled from "styled-components";
import theme from "../theme";

const SerifFamily = theme.typography.fontFamilyPrimary;
const SansFamily = theme.typography.fontFamilySecondary;

const BaseHeading = `
    font-family: ${SerifFamily};
    color: black;
    margin: 0;
    line-height: 1.25em;
`;

export const LargeHeading = styled.h2`
    ${BaseHeading}
    font-size: 4em;
`;

export const MediumHeading = styled.h3`
    ${BaseHeading}
    font-size: 2.25em;
`;

export const SmallHeading = styled.h4`
    ${BaseHeading}
    font-size: 1.5em;
`;

export const ExtraSmallHeading = styled.h5`
    ${BaseHeading}
    font-family: ${SansFamily};
    font-weight: 300;
    font-size: 1.5em;
`;


const BaseBody = `
    font-family: ${SansFamily};
    color: black;
    margin: 0;
    line-height: 1.9em;
`;


export const NormalBody = styled.p`
    ${BaseBody}
`;

export const BaseBold = `
    font-weight: 600;
`;

export const BaseItalic = `
    font-style: italic;
    font-weight: 300;
`;

export const BoldBody = styled(NormalBody)`
    ${BaseBold}
`;

export const ItalicBody = styled(NormalBody)`
    ${BaseItalic}
`;

export const LightBody = styled(NormalBody)`
    color: grey;
    font-weight: 300;
`;

export const SmallNormalBody = styled(NormalBody)`
    font-size: 0.75em;
    line-height: 1.25em;
`;

export const SmallBoldBody = styled(SmallNormalBody)`
    ${BaseBold}
`;


export const BaseLink = styled.a`
    ${BaseBody}
`;

export const SmallBoldBodyLink = styled(BaseLink)`
    ${BaseBold}
`;

