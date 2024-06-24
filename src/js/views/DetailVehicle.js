import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../component/ImageMapping";

export const DetailVehicle = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const imageUrl = getImageUrl(item?.name);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                if (!id) {
                    console.error("No id parameter found in URL");
                    return;
                }

                const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
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
                    <p className="text-white">{item.description || "No description available."}</p>
                    <div className="row pt-3 detail-container">
                        <div className="col"><p className="text-danger text-center"> Cargo capacity: {item.cargo_capacity}</p></div>
                        <div className="col"><p className="text-danger text-center"> Consumables: {item.consumables}</p></div>
                        <div className="col"><p className="text-danger text-center"> Cost in credits: {item.cost_in_credits}</p></div>
                        <div className="col"><p className="text-danger text-center"> Crew: {item.crew}</p></div>
                        <div className="col"><p className="text-danger text-center"> Length: {item.length}</p></div>
                        <div className="col"><p className="text-danger text-center"> Model: {item.model}</p></div>
                        <div className="col"><p className="text-danger text-center"> Manufacturer: {item.manufacturer}</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
