import React from "react";
import styled from "styled-components";


const OuterContainer = styled.div`
position: absolute;
width: 100vw;
height: ${props => props.theme.spacing.xl};
padding: 0 ${props => props.theme.spacing.md};
box-sizing: border-box;
z-index: 2;
*media(max-width: ${props => props.theme.breakpoints.md}) {

}
`;

const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
max-width: 1440px;
/* Magically centers the div on the screen */
margin: 0 auto;
left: 0;
right: 0;

justify-content: space-between;
box-sizing: border-box;
`;

const MELogo = styled.h2`
color: white;
line-height: 0.85em;
`;

const InnerContainer = styled.div`
display: flex;
height: 100%;
align-items: center;
`;

const MenuItemContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-end;
color: white;


@media(max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
}


`;

const MenuItemText = styled.h5`
color: white;
margin-left: ${props => props.theme.spacing.lg};

&:hover {
    border-bottom: 5px solid white;
}

@media(max-width: ${props => props.theme.breakpoints.md}) {
    margin-left: ${props => props.theme.spacing.md};
}
`;

const MenuBar = () => (
    <OuterContainer>
      <Container>
        <InnerContainer>
<MenuItemContainer>
          <MELogo children='ME'/>
</MenuItemContainer>
        </InnerContainer>
        <InnerContainer>
          <MenuItemContainer><MenuItemText children={'Industries'}/></MenuItemContainer>
          <MenuItemContainer><MenuItemText children={'People'}/></MenuItemContainer>
          <MenuItemContainer><MenuItemText children={'Culture'}/></MenuItemContainer>
          <MenuItemContainer><MenuItemText children={'Investor Relations'}/></MenuItemContainer>
        </InnerContainer>
      </Container>
    </OuterContainer>
);

export default MenuBar;
