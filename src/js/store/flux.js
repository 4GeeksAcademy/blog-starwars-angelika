const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            favorites: [],
        },

        actions: {
            fetchCharacters: async () => {
                try {
                    const resp = await fetch("https://swapi.dev/api/people/");
                    const data = await resp.json();
                    setStore({ people: data.results });
                } catch (error) {
                    console.error("Error fetching people:", error);
                }
            },

            fetchVehicles: async () => {
                try {
                    const resp = await fetch("https://swapi.dev/api/vehicles/");
                    const data = await resp.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                }
            },

            fetchPlanets: async () => {
                try {
                    const resp = await fetch("https://swapi.dev/api/planets/");
                    const data = await resp.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },

            addFavorite: (item) => {
                const store = getStore();
                const updateFavorites = store.favorites.filter(fav => fav.name !== item.name);
                if (updateFavorites.length === store.favorites.length) {
                    // No estaba en favoritos, lo agregamos
                    setStore({ favorites: [...store.favorites, item] });
                } else {
                    // Ya estaba en favoritos, lo eliminamos
                    setStore({ favorites: updateFavorites });
                }
            },

            loadFavorites: () => {
                try {
                    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
                    setStore({ favorites });
                } catch (error) {
                    console.error("Error loading favorites:", error);
                }
            },

            saveFavorites: () => {
                const store = getStore();
                try {
                    localStorage.setItem("favorites", JSON.stringify(store.favorites));
                } catch (error) {
                    console.error("Error saving favorites:", error);
                }
            }
        }
    };
};

export { getState };