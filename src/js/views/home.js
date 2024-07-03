import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";

export const Home = () => {
    const { store, actions } = useContext(Context);
    console.log(store)
    useEffect(() => {
        actions.fetchCharacters();
        actions.fetchVehicles();
        actions.fetchPlanets();
    }, []);



    return (
        <div className="container bg-dark">            
            <h2 className="text-warning">Characters</h2>
            <div className="row flex-nowrap overflow-auto p-3">
                {store.people.length > 0 ? store.people.map((character, index) => (
                    <div className="col-3 m-3" key={index}>
                        <Card item={character} type="people" addFavorite={actions.addFavorite} />
                    </div>
                )) : <p>No characters found.</p>}
            </div>

            <h2 className="text-warning">Vehicles</h2>
            <div className="row flex-nowrap overflow-auto p-3">
                {store.vehicles.length > 0 ? store.vehicles.map((vehicle, index) => (
                    <div className="col-3 m-3" key={index}>
                        <Card item={vehicle} type="vehicle" addFavorite={actions.addFavorite} />
                    </div>
                )) : <p>No vehicles found.</p>}
            </div>
            <h2 className="text-warning">Planets</h2>
            <div className="row flex-nowrap overflow-auto p-3">
                {store.planets.length > 0 ? store.planets.map((planet, index) => (
                    <div className="col-3 m-3" key={index}>
                        <Card item={planet} type="planet" addFavorite={actions.addFavorite} />
                    </div>
                )) : <p>No planets found.</p>}
            </div>
        </div>
    );
};