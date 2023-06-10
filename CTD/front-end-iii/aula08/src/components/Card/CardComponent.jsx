export default function CardComponent ({nome, idade, pokemon}) {
        
    return (
        <div>
            <h2>Treinador {nome}</h2>
            <p>{idade} anos</p>
            <h3>Pokémon Favorito: {pokemon}</h3>
        </div>
    );
}