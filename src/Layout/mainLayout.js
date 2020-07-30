import React from 'react';
import Menu from '../components/menu';
import Footer from '../components/Footer';
import styled from 'styled-components';

export const Main = styled.main`
  background-color: var(--black);
  color: #fff;
  flex: 1;
  padding-top: var(--paddingTop);
  padding-left: 5%;
  padding-right: 5%;
`;

function MainLayout({children}) {
    return (
        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
        </>
    )
}

export default MainLayout