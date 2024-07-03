import React from "react";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "./ImageMapping";

export const Card = ({ item, type, addFavorite }) => {
    const navigate = useNavigate();
    const imageUrl = getImageUrl(item.name);

    const extractNumberFromUrl = (url) => {
        const matches = url.match(/\/(\d+)\/$/);
        if (matches) {
            return matches[1];
        }
        return null;
    };

    const handleLearnMore = () => {
        const id = extractNumberFromUrl(item.url);
        navigate(`/detail/${type}/${id}`);
    };

    const renderAttributes = () => {
        switch (type) {
            case 'people':
                return (
                    <>
                        <p className="card-text">Gender: {item.gender}</p>
                        <p className="card-text">Hair Color: {item.hair_color}</p>
                        <p className="card-text">Eye Color: {item.eye_color}</p>
                    </>
                );
            case 'vehicle':
                return (
                    <>
                        <p className="card-text">Cargo Capacity: {item.cargo_capacity}</p>
                        <p className="card-text">Length: {item.length}</p>
                        <p className="card-text">Model: {item.model}</p>
                    </>
                );
            case 'planet':
                return (
                    <>
                        <p className="card-text">Climate: {item.climate}</p>
                        <p className="card-text">Gravity: {item.gravity}</p>
                        <p className="card-text">Diameter: {item.diameter}</p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="card mb-3">
            <img src={imageUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {renderAttributes()}
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary" onClick={handleLearnMore}>Learn More!</button>
                    <button className="btn btn-outline-warning" onClick={() => addFavorite(item)}>
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
