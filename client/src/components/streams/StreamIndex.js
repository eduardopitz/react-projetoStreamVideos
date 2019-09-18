import React from 'react';
import styled from 'styled-components'

const StreamIndex = () => {
    return (
        <Wrapper>
            <Title>
                Seja bem vindo ao piStream!
            </Title>
        </Wrapper>
    )
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #8f94fb;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
`;


export default StreamIndex;