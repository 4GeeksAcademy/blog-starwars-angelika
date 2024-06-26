import React from "react";
import { Link } from "react-router-dom";
import { getImageUrl } from "../component/ImageMapping";

export const Card = ({ item, addFavorite }) => {
    const { name, gender, hair_color, eye_color, id } = item;
    const imageUrl = getImageUrl(name);  

    return (
        <div className="card" style={{ width: '19rem', height: "650px" }}>
            <img src={imageUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Hair Color: {hair_color}</p>
                <p className="card-text">Eye Color: {eye_color}</p>
                <div className="d-flex justify-content-between">
                <Link to={`/detail-character/${id}`} className="btn btn-outline-primary">Learn More!</Link>                   
                <button className="btn btn-outline-warning" onClick={() => addFavorite(item)}>
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
