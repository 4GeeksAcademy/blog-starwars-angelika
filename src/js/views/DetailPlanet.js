import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../component/ImageMapping";
import { getDescription } from "../component/DescriptionMapping";

export const DetailPlanet = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const imageUrl = getImageUrl(item?.name);
    const descriptionItem = getDescription(item?.name);
    

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                if (!id) {
                    console.error("No id parameter found in URL");
                    return;
                }

                const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
                if (!response.ok) {
                    throw new Error(`Error fetching vehicle details: ${response.statusText}`);
                }

                const data = await response.json();
                setItem(data.result.properties);
            } catch (error) {
                console.error("Error fetching vehicle details:", error);
            }
        };

        fetchDetail();
    }, [id]);

    if (!item) return <div>Loading...</div>;

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
                        <div className="col"><p className="text-danger text-center"> Climate: {item.climate}</p></div>
                        <div className="col"><p className="text-danger text-center"> Diameter: {item.diameter}</p></div>
                        <div className="col"><p className="text-danger text-center"> Gravity: {item.gravity}</p></div>
                        <div className="col"><p className="text-danger text-center"> Orbital Period: {item.orbital_period}</p></div>
                        <div className="col"><p className="text-danger text-center"> Population: {item.population}</p></div>
                        <div className="col"><p className="text-danger text-center"> Rotation Period: {item.rotation_period}</p></div>
                        <div className="col"><p className="text-danger text-center"> Terrain: {item.terrain}</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
