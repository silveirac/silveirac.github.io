import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

//Esta página irá renderizar cada bebida individualmente

const Beer = () => {
    const [beer, setBeer] = useState([])
    const {id} = useParams();


    const getBeer = async()=>{
        
        //Você deve completar esta busca com o parâmetro necessário
        const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
        const data = await res.json()
        setBeer(data[0])
    }

    useEffect(()=>{
        getBeer()
    })

    const navigate = useNavigate();
    
    const handleVoltar = (event) => {
        event.preventDefault();

        navigate("/");
    }
  
  
  return (

    <>
        <button onClick={handleVoltar}>Voltar</button>
        <div>
            <h2>Cerveja número: {id}</h2>
            <div className='card'>
                <img src={beer.image_url} alt="beer-detail" />
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <p>{beer.brewers_tips} </p>
            </div>
            <button>Voltar</button>
        </div>
    </>

  )
}

export default Beer