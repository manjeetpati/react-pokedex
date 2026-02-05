import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home: React.FC<{}> = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button onClick={() => navigate('/pokemons')}>Open Pokemon</button>
        </div>
    );
};

export default Home;