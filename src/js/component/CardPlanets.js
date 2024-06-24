import React from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../component/ImageMapping";

export const CardPlanets = ({ item, type, addFavorite }) => {
    const { climate, gravity, diameter, name } = item;
    const imageUrl = getImageUrl(name);

    return (
        <div className="card" style={{ width: '19rem', height: "530px" }}>
            <img src={imageUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Climate: {climate}</p>
                <p className="card-text">Gravity: {gravity}</p>
                <p className="card-text">Diameter: {diameter}</p>
                
                <div className="d-flex justify-content-between">
                    <Link to={`/${type}/${item.url.split('/').slice(-2, -1)[0]}`} className="btn btn-outline-primary">Learn More!</Link>
                    <button className="btn btn-outline-warning" onClick={() => addFavorite(item)}>
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
