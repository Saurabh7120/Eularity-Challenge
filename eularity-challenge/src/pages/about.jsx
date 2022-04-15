import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/layout';

const Logo = styled.span`
    font-size: x-large;
    color: #212F3C;
    font-style: oblique;
    font-weight: bold;
`

const Centered = styled.div`
    width: fit-content;
    text-align: center;
    margin: 20px auto;

    p{
        font-size: 20px;
    }

    ul{
        list-style-type: square;
        li{
            text-align: left;
            margin-bottom: 10px;
        }
    }
` 

const About = () => {
    return (
        <Layout>
            <Centered>
                <p><Logo>Petgram</Logo> is a one-stop-shop for all your pet images.</p>
                <p >Things you can do: </p>
                <ul>
                    <li>Browse pet images</li>
                    <li>Search for your favourite pet</li>
                    <li>Download a pet's image or multiple selected images</li>
                </ul>

                <h3 style={{"fontStyle":"italic"}}>Get Exploring!</h3>
            </Centered>
        </Layout>
    );
};

export default About;