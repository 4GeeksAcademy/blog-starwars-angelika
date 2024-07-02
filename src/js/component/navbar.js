import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    console.log("fav: "+JSON.stringify(store.favorites))
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    <img src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png" alt="Star Wars Logo" className="logo" />
                </span>
            </Link>
            <div className="ml-auto">
                <div className="dropdown me-5">
                    <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites <span className="badge badge-light">{store.favorites.length}</span>
                    </button>
                    <ul className="dropdown-menu w-100">
                        {store.favorites.map((item, index) => (
                            <li key={index}>
                                {item.name}
                                <button className="btn btn-outline-danger btn-sm" onClick={() => actions.addFavorite(item)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};