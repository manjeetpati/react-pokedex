import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/components/home";
import PokemonHome from "../components/pages/pokemon/components/pokemon-home/pokemon-home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemons",
    element: <PokemonHome />,
  },
]);