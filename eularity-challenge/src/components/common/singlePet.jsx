import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { dateFormat } from '../../helper';
import { selectPet } from '../../redux/reducers/petReducer';

const Card = styled.div`
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    max-width: 250px;
    height: 400px;
    position: relative;
    ${props => props.bi && css`
        background-image: url(${props.bi});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-position-x: left 2rem;
    `}
`;

const InfoBox = styled.div`
    width: 92%;
    bottom: 0;
    position: absolute;
    background-color: rgba(0,0,0,0.4);
    min-height: 38%;
    color: white;
    padding: 10px;
    border-radius: 0 0 10px 10px;
`
const Title = styled.p`
    font-size: larger;
    font-weight: 600;
`

const Description = styled.p`
    font-weight: 400;
    font-style: italic;
`
const ActionBox = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`

const SelectButton = styled.button`
    background-color: ${props => props.isSelected ? '#6495ED' : '#212F3C'};
    transition: 0.3s;
    padding: 10px;
    outline: none;
    border: none;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    width: 83px;
`

const SinglePet = ({url, created, description, title, selected, id}) => {    

    const dispatch = useDispatch();

    return  <Card bi={url}>
        <InfoBox>
            <Title>
                {title}
            </Title>
            <Description>
                "
                {description}
                "
            </Description>
            <ActionBox>
                <span>{dateFormat(created)}</span>
                <SelectButton isSelected={selected} onClick={() => dispatch(selectPet({id:id,selected:!selected}))}>{selected ? "Selected!" : "Select me!"}</SelectButton>
            </ActionBox>
        </InfoBox>
    </Card>
};

export default SinglePet;