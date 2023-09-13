import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Poke from './Poke'; // Import the Poke component

const itemsPerPage = 18; // Number of items to display per page

function PokemonList({ allPokemon }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the Pokemon array to get the current page's items
  const currentPagePokemon = allPokemon.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Stack spacing={2}>
      {currentPagePokemon.map((pokemon, key) => (
        <Poke key={key} name={pokemon.name} image={pokemon.image} types={pokemon.types} />
      ))}
      <Pagination
        count={Math.ceil(allPokemon.length / itemsPerPage)}
        page={currentPage}
        onChange={(event, newPage) => handlePageChange(newPage)}
        variant="outlined"
        color="secondary"
      />
    </Stack>
  );
}

export default PokemonList;

