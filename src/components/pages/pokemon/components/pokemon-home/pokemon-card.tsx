import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

const PokemonCard: React.FC<{ url: string, name: string }> = ({ url, name }) => {
    const image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${url.split('/').slice(-2, -1)[0]}.svg`;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={name}
            />
            <CardMedia
                component="img"
                height="194"
                width="194"
                image={image}
                alt={name}
            />
        </Card>
    )
}   

export default PokemonCard;