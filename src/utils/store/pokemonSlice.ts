import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemons: [],
    page: 1,
    limit: 10,
};

const pokemonSlice = createSlice({
    name: "pokemons",
    initialState,
    reducers: {
        updatePokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        }
    }
})

export const { updatePokemons, setPage } = pokemonSlice.actions;

export default pokemonSlice.reducer ;