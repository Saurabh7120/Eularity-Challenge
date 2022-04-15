import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'

const NavContainer = styled.div`
width: 100%;
display: flex;
padding: 5px 10px;
position: fixed;
z-index: 999;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
margin-top: 0;
background-color: #212F3C;
`
const Link = styled.a`
color: ${props => props.active ? 'white' : '#D0D3D4'};
text-decoration: ${props => props.active ? 'underline' : 'none'};;

&:visited{
    color: ${props => props.active ? 'white' : '#D0D3D4'};
}
`
const NavList = styled.ul`
    width: 80%;
    list-style-type: none;
    display: flex;
    gap: 40px;
    justify-content: center;
`
const Logo = styled.h1`
    font-size: x-large;
    color: white;
    margin-left: 20px;
    font-style: oblique;
`

const Header = () => {

    const {pathname} = useLocation();

   

    return (
        <NavContainer>
            <Logo>Petgram</Logo>
            <NavList>
                <li>
                    <Link active={
                        pathname.split('/')[1] === ""
                    }
                    href='/'
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link active={
                        pathname.split('/')[1] === "about"
                    }
                    href='/about'
                    >
                        About
                    </Link>
                </li>
            </NavList>
        </NavContainer>
    );
};

export default Header;