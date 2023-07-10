// Write your Character component here
import React from "react";
import styled from 'styled-components';

const Page = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;

const ChaWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: grey;
margin: 20px;
border: 10px solid grey;
`;

const Character = props => {

    const { data } = props;
    
    return (
        <Page>
            <ChaWrap>
                <h3>{data.name}</h3>
                <p>Gender: {data.gender}</p>
                <p>Hair Color: {data.hair_color}</p>
                <p>Eye Color: {data.eye_color}</p>
                <p>Height: {data.height}</p>
                <p>Weight: {data.mass} Kilos</p>
            </ChaWrap>
        </Page>

)};



export default Character;

