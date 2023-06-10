import styles from './FormComponent.module.css';
import { useState } from 'react';
import InputComponent from '../Input/InputComponent';
import CardComponent from '../Card/CardComponent';

export default function FormComponent () {

    //HOOKS
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [pokemon, setPokemon] = useState("");
    const [listaCards, setListaCards] = useState([]);
    const [formHabilitado, setFormHabilitado] = useState(false);
    
    //FUNCTIONS
    const manipuladorNome = (event) => setNome(event.target.value);
    const manipuladorIdade = (event) => setIdade(event.target.value);
    const manipuladorPokemon = (event) => setPokemon(event.target.value);
    
    const validadorFormulário = () => {
        if (nome.length >= 3 && idade > 0 && pokemon.length >= 3) {
            setFormHabilitado(true);
        } else {
            setFormHabilitado(false);
        }
    }

    const manipuladorBotao = (event) => {
        event.preventDefault();

        let tempCard = {
            nome: nome,
            idade: idade,
            pokemon: pokemon
        }
        setListaCards([
            ...listaCards,
            tempCard
        ])

        setNome("")
        setIdade("")
        setPokemon("")
    };



    return (
        <>
            <form>
                <InputComponent 
                    name="Nome"
                    type="text"
                    value={nome}
                    fnOnChange={manipuladorNome}
                    fnOnKeyUp={validadorFormulário}
                />
                <InputComponent 
                    name="Idade"
                    type="text"
                    value={idade}
                    fnOnChange={manipuladorIdade}
                    fnOnKeyUp={validadorFormulário}
                />
                <InputComponent 
                    name="Pokémon Favorito"
                    type="text"
                    value={pokemon}
                    fnOnChange={manipuladorPokemon}
                    fnOnKeyUp={validadorFormulário}
                />
                <button
                    disabled={!formHabilitado}
                    onClick={manipuladorBotao}
                >Registar</button>
            </form>

            <div>
                {
                    listaCards.map((e, i) => <CardComponent key={i} nome={e.nome} idade={e.idade} pokemon={e.pokemon}/>)
                }
            </div>
        </>
    );
}