import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../component/ImageMapping";
import { getDescription } from "../component/DescriptionMapping";

const DetailView = () => {
    const { type, id } = useParams();
    const [item, setItem] = useState(null);
    const imageUrl = getImageUrl(item?.name);
    const descriptionItem = getDescription(item?.name);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                let apiUrl;
                if (type === 'people') {
                    apiUrl = `https://www.swapi.tech/api/people/${id}`;
                } else if (type === 'vehicle') {
                    apiUrl = `https://www.swapi.tech/api/vehicles/${id}`;
                } else if (type === 'planet') {
                    apiUrl = `https://www.swapi.tech/api/planets/${id}`;
                } else {
                    throw new Error('Unknown type');
                }

                const response = await fetch(apiUrl);
                const data = await response.json();
                setItem(data.result.properties); 
            } catch (error) {
                console.error(`Error fetching ${type} details:`, error);
            }
        };

        fetchDetail();
    }, [type, id]);

    if (!item) return <div>Loading...</div>;

    const renderAttributes = () => {
        switch (type) {
            case 'people':
                return (
                    <>
                        <div className="col"><p className="text-danger text-center">Height: {item.height}</p></div>
                        <div className="col"><p className="text-danger text-center">Mass: {item.mass}</p></div>
                        <div className="col"><p className="text-danger text-center">Hair Color: {item.hair_color}</p></div>
                        <div className="col"><p className="text-danger text-center">Skin Color: {item.skin_color}</p></div>
                        <div className="col"><p className="text-danger text-center">Eye Color: {item.eye_color}</p></div>
                        <div className="col"><p className="text-danger text-center">Birth Year: {item.birth_year}</p></div>
                        <div className="col"><p className="text-danger text-center">Gender: {item.gender}</p></div>
                    </>
                );
            case 'vehicle':
                return (
                    <>
                        <div className="col"><p className="text-danger text-center">Model: {item.model}</p></div>
                        <div className="col"><p className="text-danger text-center">Manufacturer: {item.manufacturer}</p></div>
                        <div className="col"><p className="text-danger text-center">Cost in Credits: {item.cost_in_credits}</p></div>
                        <div className="col"><p className="text-danger text-center">Length: {item.length}</p></div>
                        <div className="col"><p className="text-danger text-center">Max Atmosphering Speed: {item.max_atmosphering_speed}</p></div>
                        <div className="col"><p className="text-danger text-center">Crew: {item.crew}</p></div>
                        <div className="col"><p className="text-danger text-center">Passengers: {item.passengers}</p></div>
                    </>
                );
            case 'planet':
                return (
                    <>
                        <div className="col"><p className="text-danger text-center">Climate: {item.climate}</p></div>
                        <div className="col"><p className="text-danger text-center">Diameter: {item.diameter}</p></div>
                        <div className="col"><p className="text-danger text-center">Gravity: {item.gravity}</p></div>
                        <div className="col"><p className="text-danger text-center">Orbital Period: {item.orbital_period}</p></div>
                        <div className="col"><p className="text-danger text-center">Population: {item.population}</p></div>
                        <div className="col"><p className="text-danger text-center">Rotation Period: {item.rotation_period}</p></div>
                        <div className="col"><p className="text-danger text-center">Terrain: {item.terrain}</p></div>
                    </>
                );
            default:
                return <p className="text-danger text-center">Unknown type</p>;
        }
    };

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-4">
                    <img src={imageUrl} className="img-fluid" alt={item.name} />
                </div>
                <div className="col-md-8">
                    <h3 className="text-white">{item.name}</h3>
                    <p className="text-white">{descriptionItem}</p>
                    <div className="row pt-3 detail-container">
                        {renderAttributes()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailView;
