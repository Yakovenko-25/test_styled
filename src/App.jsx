import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: grey;
    width: 100%;
    min-height: 100vh;
    font-size: 60px;
`

const Block = styled.div`
    border: 1px solid black;
    width: 100%;
    text-align: center;
    padding: 10px;
    margin: 10px;
    color: ${props => props.color || 'white'};
`
 
function App() {

    return (
        <AppWrapper>
            <Block>Block 1</Block>
            <Block color={'green'}>Block 2</Block>
        </AppWrapper>
    );
}

export default App