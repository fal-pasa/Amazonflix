import React from 'react'
import Menu from '../components/menu'
import Footer from '../components/Footer'
import styled, { css } from 'styled-components'

export const Main = styled.main`
  background-color: var(--black);
  color: #fff;
  flex: 1;
  padding-top: var(--paddingTop);
  padding-left: 5%;
  padding-right: 5%;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
`

function MainLayout ({ children, paddingAll}) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  )
}

export default MainLayout
