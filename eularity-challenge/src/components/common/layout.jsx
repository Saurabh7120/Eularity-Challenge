import React from 'react';
import styled from 'styled-components'
import Header from './header';

const Layout = ({children}) => {

    const FlexBox = styled.div`
        display: flex;
        padding-top: 50px;
        position: relative;
        margin-left: 2%;
    `

    const Box = styled.div`
        width: 100%;
    `

    return (
        <Box>
            <Header/>
            <FlexBox>
                {children}
            </FlexBox>
        </Box>
    );
};

export default Layout;