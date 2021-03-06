import React from 'react'
import styled, { keyframes } from 'styled-components'

const SpinAnimate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 105;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    background-color: rgba(0, 0, 0, .6);
`

const Loader = styled.div`
    border: 6px solid #1f1f1f;
    border-top: 6px solid var(--primary);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: ${SpinAnimate} 1s linear infinite;
`

function Loading () {
  return (
    <Container>
      <Loader />
    </Container>
  )
}

export default Loading
