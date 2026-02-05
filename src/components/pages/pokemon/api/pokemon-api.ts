import { api } from "../../../../utils/api-client";




export const fetchPokemons = async (limit: number = 10, page: number = 0) => {
    const response = await api.get<{ results: { name: string; url: string }[]; count: number }>(
        'https://pokeapi.co/api/v2/pokemon', //move base to env
        {
            params: { limit, offset: (page - 1) * limit },
        }
    );
    return response;
}