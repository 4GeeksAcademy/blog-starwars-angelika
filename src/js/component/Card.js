import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getImageUrl } from "../component/ImageMapping";

export const Card = ({ item, addFavorite }) => {
    const { pathname } = useLocation();
    console.log('PATH');
    console.log(pathname);
    const navigate = useNavigate();

    const { name, gender, hair_color, eye_color } = item;
    const imageUrl = getImageUrl(name);

    const extractNumberFromUrl = (url) => {
        const matches = url.match(/\/(\d+)\/$/);
        if (matches) {
            return matches[1];
        }
        return null;
    };

    const handleLearnMore = () => {
        const num = extractNumberFromUrl(item.url);
        navigate(`/detail-character/${num}`);
    };

    return (
        <div className="card" style={{ width: '19rem', height: "650px" }}>
            <img src={imageUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Hair Color: {hair_color}</p>
                <p className="card-text">Eye Color: {eye_color}</p>
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
