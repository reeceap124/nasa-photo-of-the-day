import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    text-align: center;
    background: dodgerblue;
    width: 80%;
    height: 80%;
    margin: auto;
    padding: 1%;
`
const Title = styled.h2`
    font-size: 4rem;
`
const CardDate = styled.div`
font-size: 2rem;
margin-bottom: 5%;
`
const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin:auto;
`
const TheImage = styled.img`
    width: 45%;
    height: auto:
    box-shadow: 5px 10px #888888;
    
`
const CardDescription = styled.p`
    width: 40%;
`
const PhotoCard = props =>{
    return(
        <Card>
            <Title>{props.title}</Title>
            <CardDate>{props.date}</CardDate>
            <Info>
                <TheImage alt='APOD' src={props.hdurl}/>
                <CardDescription>{props.description}</CardDescription>
            </Info>
        </Card>
    )
}

export default PhotoCard