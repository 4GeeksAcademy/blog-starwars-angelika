import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../component/ImageMapping";
import { getDescription } from "../component/DescriptionMapping";

export const DetailCharacter = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const imageUrl = getImageUrl(item?.name);
    const descriptionItem = getDescription(item?.name);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
                const data = await response.json();
                setItem(data.result.properties); 
            } catch (error) {
                console.error(`Error fetching character details:`, error);
            }
        };

        fetchDetail();
    }, [id]); 

    if (!item) return <div>Loading...</div>;

    return (
        <div className="container my-4 ">
            <div className="row">
                <div className="col-md-4">
                    <img src={imageUrl} className="img-fluid" alt={item.name} />
                </div>
                <div className="col-md-8">
                    <h3 className="text-white">{item.name}</h3>
                    <p className="text-white">{descriptionItem}</p>
                    <div className="row pt-3 detail-container">
                        <div className="col"><p className="text-danger text-center"> Height: {item.height}</p></div>
                        <div className="col"><p className="text-danger text-center"> Mass: {item.mass}</p></div>
                        <div className="col"><p className="text-danger text-center"> Hair Color: {item.hair_color}</p></div>
                        <div className="col"><p className="text-danger text-center"> Skin Color: {item.skin_color}</p></div>
                        <div className="col"><p className="text-danger text-center"> Eye Color: {item.eye_color}</p></div>
                        <div className="col"><p className="text-danger text-center"> Birth Year: {item.birth_year}</p></div>
                        <div className="col"><p className="text-danger text-center"> Gender: {item.gender}</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
