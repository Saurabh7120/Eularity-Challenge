import React, { useEffect, useState } from 'react';
import PetList from '../components/petList';
import styled from 'styled-components'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPet } from '../redux/reducers/petReducer';
import Layout from '../components/common/layout';
import Sidebar from '../components/common/sidebar';

const MainContainer = styled.div`
    padding: 2% 4% 2% 8%;
    width: 95%;
`

const Home = () => {
    const dispatch = useDispatch()
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        const getPets = async() => {
            const {data} = await axios.get("https://eulerity-hackathon.appspot.com/pets");
            let formattedData = data.map(i => {return {...i, id: uuidv4()}})
            dispatch(addPet(formattedData))
            setRenderCount(prev => prev + 1)
        }
        renderCount == 0  && getPets()
    },[])

   

    return (
        <Layout>
            <Sidebar/>
            <MainContainer>
                <PetList/>
            </MainContainer>
        </Layout>
    );
};

export default Home;