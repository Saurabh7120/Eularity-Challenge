import React, { useEffect, useState } from 'react';
import SinglePet from './common/singlePet';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components'


const Centered = styled.div`
    width: 100%;
    text-align: center;
`

const PetList = () => {
    const [list, setList] = useState()
    const [loading,setLoading] = useState(true);
    const petList = useSelector(state => state.list)

    const [searchParams] = useSearchParams()
    let query = searchParams.get('query')

    useEffect(() => {
        if(!petList) return
        if(query) {
            search()
        }else{
            setList(petList)
            setLoading(false);
        }
        setLoading(true);
    },[petList])

    useEffect(()=> {
        search()
    },[query])

    const search = () => {
        if(!petList) return
        if(!query) {
            setList(petList)
            return
        }
        let tempArr = [];
        tempArr = petList.filter(i => i.title.toLowerCase().includes(query.toLowerCase()))
        setList(tempArr);
        setLoading(false);
    }

    return (
        list ? 
        list.length > 0 ?
        <div className='pet-list-container'>
            {list.map((i,idx) => <SinglePet key={idx} id={i.id} selected={i.selected} created={i.created} description={i.description} url={i.url} title={i.title}/>) 
        }
        </div> :
        <Centered>
             <h1>Sorry! No pet images to show!</h1>
         </Centered>
        :
        loading?
        <Centered>
            <p>Please wait...</p>
        </Centered>
        :
        <Centered>
            <h1>Oops! Something went wrong!</h1>
            <h2>Please Refresh!</h2>
        </Centered>
    );
};

export default PetList;