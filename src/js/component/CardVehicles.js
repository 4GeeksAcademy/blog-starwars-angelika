import React from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../component/ImageMapping";

export const CardVehicles = ({ item, addFavorite }) => {
    const { cargo_capacity, length, model, name, id } = item;
    const imageUrl = getImageUrl(name);

    return (
        <div className="card" style={{ width: '19rem', height: "430px" }}>
            <img src={imageUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Cargo Capacity: {cargo_capacity}</p>
                <p className="card-text">Length: {length}</p>
                <p className="card-text">Model: {model}</p>
                
                <div className="d-flex justify-content-between">
                <Link to={`/detail-vehicle/${id}`} className="btn btn-outline-primary">Learn More!</Link>                    
                <button className="btn btn-outline-warning" onClick={() => addFavorite(item)}>
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
