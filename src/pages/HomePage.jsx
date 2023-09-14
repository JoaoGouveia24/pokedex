import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import Poke from '../components/Pokemon/Poke'
import { Container, Grid } from '@mui/material'
import PaginationControlled from '../components/PaginationControlled'



export const HomePage = () => {
  
    const [pokemon, setPokemon] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(24);


    useEffect(() => {
        getPokemon();
    }, []);
    

    const getPokemon = () => {

        var endPoints =[]
        for (var i = 0; i < 1002; i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
        }
        var response = axios.all(endPoints.map((endPoint) => axios.get(endPoint))).then((res) => setPokemon(res))
        console.log(response)
    };

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPost = pokemon.slice(firstPostIndex, lastPostIndex)

    const pokemonFilter = (name) => {
        var filteredPok = [];
        if(name === ""){
            getPokemon();
        }
        for(var i in pokemon) {
            if(pokemon[i].data.name.includes(name)){
                filteredPok.push(pokemon[i]);
            }
        }
        setPokemon(filteredPok);
    };
//
  
    return (
    <div>
        <NavBar pokemonFilter={pokemonFilter}/>
        <Container maxWidth="false">
            <Grid container spacing={3}>
                {currentPost.map((pokemons, key) => (
                    <Grid item xs={2} key={key}>
                    <Poke name={pokemons.data.name} image={pokemons.data.sprites.front_default} types={pokemons.data.types}/>
                </Grid>
                ))}
            </Grid>

            <PaginationControlled 
                    totalPosts={pokemon.length} 
                    postsPerPage={postsPerPage}
                    setcurrentPage={setCurrentPage}
                    currentpage={currentPage}
            />
            
            
        </Container>
    </div>
  )
                }