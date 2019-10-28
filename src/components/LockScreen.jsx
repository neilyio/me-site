import React, { useState } from "react";
import styled from "styled-components";
import InputForm from "../components/InputForm.jsx";
import { useCookies } from 'react-cookie';
import SquareButton from "../components/SquareButton.jsx";
import { FaAngleDoubleRight } from "react-icons/fa";

const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.palette.primary.main};
    display: ${props => props.authorized ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

const isPasswordValid = (password) => password == 'travelmug';

const InnerContainer = styled.div`
    display: flex;
`;

const Footer = () => {
    const [ cookies, setCookie ] = useCookies(['authorized']);
    const [ failedAttempt, setFailedAttempt ] = useState(false);
    const [ inputValue, setInputValue ] = useState("");
    
    const isAuthorized = (password) => {
        if (isPasswordValid(password)) {
            setCookie('authorized', true, { path: '/' });
            window.scrollTo(0, 0);
        } else {
            setFailedAttempt(true);
        }
    };

    return (
        <Container authorized={cookies.authorized}>
          <InnerContainer>
            <InputForm
              title={failedAttempt ? 'Wrong Password!' : 'Password'}
              titleColor='white'
              password={true}
              onChange={value => setInputValue(value)}/>
            <SquareButton 
              paddingX={false}
              onClick={() => isAuthorized(inputValue)}>
              <FaAngleDoubleRight/>
            </SquareButton>
          </InnerContainer>
        </Container>
    );
};

export default Footer;
