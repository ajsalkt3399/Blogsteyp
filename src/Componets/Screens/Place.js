import React, { useState, useEffect } from 'react';
import Heade from './Includes/Heade';
import axios from "axios";
import styled from "styled-components";
import { BASE_URL } from "../../axiosConfig";

function Place({ match }) {
    const [place, setPlace] = useState({
        name: "",
        gallery: [],
    });

    useEffect(() => {
        axios
            .get('${BASE_URL}places/view/${match.params.id}')
            .then((response) => {
                setPlace(response.data.data); // Corrected setPlaces to setPlace
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Heade />
            <MainContainer>
                <Title>{place.name}</Title> {/* Corrected the closing tag */}
                <InfoContainer>
                    <CategoryName>{place.category}</CategoryName>
                    <LocationContainer>
                        <LocationIcon src={require("../../Assets/Images/place.svg").default} alt="Image" />
                        <LocationName>{place.location}</LocationName>
                    </LocationContainer>
                </InfoContainer>
                <GalleryContainer>
                    <GalleryImageItem>
                        <GalleryImage src={place.image} alt="Image" /> {/* Corrected src attribute */}
                    </GalleryImageItem>
                    {place.gallery.map((image) => ( // Removed extra closing parenthesis
                        <GalleryImageItem key={image.id}>
                            <GalleryImage src={image.image} alt="" />
                        </GalleryImageItem>
                    ))}
                </GalleryContainer>
                <SubHeading>Place Details</SubHeading>
                <Description>{place.Description}</Description>
            </MainContainer>
        </>
    );
}

const MainContainer = styled.div`
    width: 70%;
    margin: 70px auto 0;
`;

const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 15px;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const CategoryName = styled.span`
    padding: 5px 10px;
    border-radius: 28px;
    display: inline-block;
    border: 1px solid #9c9c9c;
    margin-right: 10px;
`;

const LocationContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LocationIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 10px;
`;

const LocationName = styled.span``;

const GalleryContainer = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const GalleryImageItem = styled.li`
    margin-right: 10px;
`;

const GalleryImage = styled.img`
    width: 150px;
    height: 150px;
`;

const SubHeading = styled.h3`
    font-size: 24px;
    margin-top: 20px;
`;

const Description = styled.p`
    font-size: 18px;
`;

export default Place;