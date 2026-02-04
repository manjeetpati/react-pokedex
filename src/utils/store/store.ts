import {configureStore} from '@reduxjs/toolkit'
import pokemonReducer from '../store/pokemonSlice'

export default configureStore({
    reducer: {
        pokemons: pokemonReducer
    },
})