import Pagination from '@mui/material/Pagination';
import { PokemonList } from './pokemon-list';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchPokemons } from '../api/pokemon-api';
import { setPage, updatePokemons } from '../../../../../../utils/store/pokemonSlice';
import './pokemon.scss'

const PokemonHome: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector((state: any) => state.pokemons.pokemons);
    const page = useSelector((state: any) => state.pokemons.page);

    const [pageCount, setPageCount] = useState(10);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        callPokemonApi(value, 30);
    }

    useEffect(() => {
        callPokemonApi(page, 30);
    }, [page]);

    const callPokemonApi = async (page: number, limit: number) => {
       const {count, results } = await fetchPokemons(limit, page);
        setPageCount(Math.ceil(count / limit));
         dispatch(updatePokemons(results));
         dispatch(setPage(page));

    }
    return (
        <>
            <PokemonList pokemons={pokemons} />
            <Pagination className='pagination' page={page} count={pageCount} color="primary" onChange={handlePageChange} />
        </>
    )
};
export default PokemonHome;