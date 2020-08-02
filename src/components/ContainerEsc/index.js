import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 102;
  background: #0008;
  display: none;
  place-items: center;
`

function ContainerEsc ({children}) {
  function handleClick (e) {
    if (e.target.className.includes('videoTeste')) {
      document.querySelector('.videoTeste').style.display = 'none'
      document.querySelector('body').style.overflow = 'auto'
    }
  }

  return (
    <Container className="videoTeste" onClick={handleClick}>
      {children}
    </Container>
  )
}

export default ContainerEsc
