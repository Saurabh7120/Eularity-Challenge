import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/layout';


const Centered = styled.div`
    width: fit-content;
    text-align: center;
    margin: 20px auto;

` 

const NotFound = () => {
    return (
        <Layout>
            <Centered>
                <h1>404</h1>
                <h2>Page not found!</h2>
            </Centered>
        </Layout>
    );
};

export default NotFound;