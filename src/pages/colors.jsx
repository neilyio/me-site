import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Swatch = styled.div`
    width: 240px;
    height: 240px;
    background-color: ${props => props.color};
    font-size: 1.5em;
    color: white;
    text-shadow:
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


const colorList = (() => {
    const results = [];
    let tuple;
    for (let category in theme.palette) {
        for (let variant in theme.palette[category]) {
            let tuple = [];
            tuple.push(category);
            tuple.push(variant);
            results.push(tuple);
        }
    }

    return results;
})();

const ColorsPage = (props) => (
    <Container>
      {colorList.map((el, index) => (
          
          <Swatch color={theme.palette[el[0]][el[1]]}>
            {el[0] + "." + el[1]}
          </Swatch>
      ))}

    </Container>
);

export default ColorsPage;
