import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components'
import { clearSelection, selectAll } from '../../redux/reducers/petReducer';
import {BiSelectMultiple,BiDownload} from 'react-icons/bi'
import {MdClear} from 'react-icons/md'
import { useNavigate, useSearchParams } from 'react-router-dom';


const VerticalFlex = styled.div`
width: 15%;
display: flex;
flex-direction: column;
gap: 10px;
padding-top: 40px;
position: fixed;
`

const IconButton = styled.button`
    display: flex;
    background: transparent;
    outline: none;
    border: none;
    text-align: center;
    cursor: pointer;

    &:active {
        border: 1px solid black;
        }

`

const DarkButton = styled.button`
    background-color: #212F3C;
    color: white;
    border: none;
    outline: none;
    padding: 8px;
    transition: 0.6s;
    cursor: pointer;
    ${props => props.hasIcon && css`
        display: flex;
        justify-content: center;
    `}

    &:hover{
        background-color: white;
        color: #212F3C;
        border: 1px solid #212F3C;
    }
`

const LightButton = styled.button`
    background-color: white;
    color: #212F3C;
    border: 1px solid #212F3C;
    outline: none;
    padding: 8px;
    transition: 0.6s;
    cursor: pointer;
    &:hover{
        background-color: #212F3C;
        color: white;
    }
`

const SearchInput = styled.input`
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid #212F3C;
    padding: 5px;
    outline: none;
    transition: 0.3s;
    &:focus{
        border: 2px solid #212F3C;
    }
`

const Sidebar = () => {

    const [selected, setSelected] = useState([]);
    const [searchQuery, setSearchQuery] = useState();

    const dispatch = useDispatch()

    const list = useSelector(state => state.list);

    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate()

    useEffect(() => {
        if(!list) return
        let tempArr = []
        list.forEach(element => {
            if(element.selected) tempArr.push(element)
        });
        setSelected(tempArr)
    },[list])

    const downloadImages = () => {
        if(!selected || selected.length === 0) {
            alert("Please select atleast one pet to download!")
            return;
        }
        selected.forEach(async img => {
            const res = await fetch(img.url);
            res.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = `${img.title}.jpeg`;
                a.click()
            })
        });
    }

    const handleSearchClick = () => {
        if(!searchQuery || searchQuery.trim().length === 0) {
            alert("Please enter a name to search!")
            return;
        }
        setSearchParams({query:searchQuery})
    }

    return (
        <VerticalFlex>
            <SearchInput placeholder='Type a name...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)}></SearchInput>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between',marginBottom:'50px'}}>
                <DarkButton onClick={handleSearchClick}>Click to search</DarkButton>
                <LightButton onClick={() => {setSearchQuery(''); navigate('/');}}>Clear Search</LightButton>
            </div> 
            <IconButton onClick={() => dispatch(selectAll())}>
                <BiSelectMultiple fontSize={20}/> 
                <span style={{marginTop:'3px',marginLeft:'5px'}}>Select All</span>
            </IconButton>
            <IconButton onClick={() => dispatch(clearSelection())}>
                <MdClear fontSize={20}/> 
                <span style={{marginTop:'3px',marginLeft:'5px'}}>Clear</span>
            </IconButton>
            <DarkButton hasIcon onClick={() => downloadImages()}>
                <BiDownload fontSize={20}/>
                <span style={{marginTop:'3px',marginLeft:'5px'}}>Download</span>
            </DarkButton>
        </VerticalFlex>
    );
};

export default Sidebar;