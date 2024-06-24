import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Detail = ({ type }) => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = await fetch(`https://swapi.dev/api/${type}/${id}/`);
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error(`Error fetching ${type} details:`, error);
            }
        };
        fetchDetail();
    }, [id, type]);

    if (!item) return <div>Loading...</div>;

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://via.placeholder.com/400" className="img-fluid" alt="..." />
                </div>
                <div className="col-md-6">
                    <h3>{item.name}</h3>
                    <p>{item.description || "No description available."}</p>
                    <div className="row border-top pt-3">
                        <div className="col-4">Height: {item.height}</div>
                        <div className="col-4">Mass: {item.mass}</div>
                        <div className="col-4">Hair Color: {item.hair_color}</div>
                        <div className="col-4">Skin Color: {item.skin_color}</div>
                        <div className="col-4">Eye Color: {item.eye_color}</div>
                        <div className="col-4">Birth Year: {item.birth_year}</div>
                        <div className="col-4">Gender: {item.gender}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};