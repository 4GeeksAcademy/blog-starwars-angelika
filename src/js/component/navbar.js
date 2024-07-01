import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    console.log("fav: "+store.favorites.name)
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    <img src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png" alt="Star Wars Logo" className="logo" />
                </span>
            </Link>
            <div className="ml-auto">
                <div className="dropdown">
                    <button className="btn btn-danger data-bs-toggle me-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Favorites <span className="badge badge-light">{store.favorites.length}</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                        {store.favorites.map((fav, index) => (
                            <div className="dropdown-item d-flex justify-content-between align-items-center" key={index}>
                                <span>{fav.name}</span>
                                <button className="btn btn-outline-danger btn-sm" onClick={() => actions.addFavorite(fav)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};