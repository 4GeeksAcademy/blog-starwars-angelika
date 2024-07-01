import React, { useContext, useEffect } from "react";
import { Card } from "../component/Card";
import { CardVehicles } from "../component/CardVehicles";
import { Context } from "../store/appContext";
import { CardPlanets } from "../component/CardPlanets";

export const Home = () => {
    const { store, actions } = useContext(Context);

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
                        <CardVehicles item={vehicle} type="vehicles" addFavorite={actions.addFavorite} />
                    </div>
                )) : <p>No vehicles found.</p>}
            </div>
            
            <h2 className="text-warning">Planets</h2>
            <div className="row flex-nowrap overflow-auto p-3">
                {store.planets.length > 0 ? store.planets.map((planet, index) => (
                    <div className="col-3 m-3" key={index}>
                        <CardPlanets item={planet} type="planets" addFavorite={actions.addFavorite} />
                    </div>
                )) : <p>No planets found.</p>}
            </div>
        </div>
    );
};