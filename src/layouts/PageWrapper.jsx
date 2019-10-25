import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../theme";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }

textarea:focus, input:focus{
    outline: none;
}


h2 { 
    color: ${props=> props.theme.typography.h2.color};
    font-family: ${props=> props.theme.typography.h2.fontFamily};
    font-weight: ${props=> props.theme.typography.h2.fontWeight}; 
    font-size: ${props=> props.theme.typography.h2.fontSize};
    font-style: ${props => props.theme.typography.h2.fontStyle};
    line-height: ${props=> props.theme.typography.h2.lineHeight};
    letter-spacing: ${props=> props.theme.typography.h2.letterSpacing};
    margin: ${props => props.theme.typography.h2.margin};
  
}

h3 { 
    color: ${props=> props.theme.typography.h3.color};
    font-family: ${props=> props.theme.typography.h3.fontFamily};
    font-weight: ${props=> props.theme.typography.h3.fontWeight}; 
    font-size: ${props=> props.theme.typography.h3.fontSize};
    font-style: ${props => props.theme.typography.h3.fontStyle};
    line-height: ${props=> props.theme.typography.h3.lineHeight};
    letter-spacing: ${props=> props.theme.typography.h3.letterSpacing};
     margin: ${props => props.theme.typography.h3.margin};
}

h4 { 
    color: ${props=> props.theme.typography.h4.color};
    font-family: ${props=> props.theme.typography.h4.fontFamily};
    font-weight: ${props=> props.theme.typography.h4.fontWeight}; 
    font-size: ${props=> props.theme.typography.h4.fontSize};
    font-style: ${props => props.theme.typography.h4.fontStyle};
    line-height: ${props=> props.theme.typography.h4.lineHeight};
    letter-spacing: ${props=> props.theme.typography.h4.letterSpacing};
    margin: ${props => props.theme.typography.h4.margin};
}

h5 { 
    color: ${props=> props.theme.typography.h5.color};
    font-family: ${props=> props.theme.typography.h5.fontFamily};
    font-weight: ${props=> props.theme.typography.h5.fontWeight}; 
    font-size: ${props=> props.theme.typography.h5.fontSize};
    font-style: ${props => props.theme.typography.h5.fontStyle};
    line-height: ${props=> props.theme.typography.h5.lineHeight};
    letter-spacing: ${props=> props.theme.typography.h5.letterSpacing};
    margin: ${props => props.theme.typography.h5.margin};
}

p, input, a { 
     color: ${props=> props.theme.typography.p.color};
    font-family: ${props=> props.theme.typography.p.fontFamily};
    font-weight: ${props=> props.theme.typography.p.fontWeight}; 
    font-size: ${props=> props.theme.typography.p.fontSize};
    font-style: ${props => props.theme.typography.p.fontStyle};
    line-height: ${props=> props.theme.typography.p.lineHeight};
    letter-spacing: ${props=> props.theme.typography.p.letterSpacing};  
    margin: ${props => props.theme.typography.p.margin};
}

small { 
    color: ${props=> props.theme.typography.small.color};
    font-family: ${props=> props.theme.typography.small.fontFamily};
    font-weight: ${props=> props.theme.typography.small.fontWeight}; 
    font-size: ${props=> props.theme.typography.small.fontSize};
    font-style: ${props => props.theme.typography.small.fontStyle};
    line-height: ${props=> props.theme.typography.small.lineHeight};
    letter-spacing: ${props=> props.theme.typography.small.letterSpacing}; 
    margin: ${props => props.theme.typography.small.margin};
}
`;

const PageWrapperStyle = styled.div`
	width: 100%;
	height: 100%;
        display: flex;
        flex-direction: column;
`;

const PageWrapper = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
          <React.Fragment>
          <GlobalStyle/>
            <PageWrapperStyle>
            { children }
            </PageWrapperStyle>
          </React.Fragment>
        </ThemeProvider>
    );
};

export default PageWrapper;
