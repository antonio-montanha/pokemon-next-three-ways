import CardComponent from "../components/Card"
import React from 'react'
import { render, waitingForElement, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


describe("Testing pokemon card component", () => {
    it("should present the pokemon name", () => {
      const pokemonTypes = ["Grass","Poison"]
      render(<CardComponent name='Bulbasaur' image='/pokemon/bulbasaur.jpg' type={pokemonTypes}/>);  
      
      const bulbasaurCard = screen.getByText('Bulbasaur')
  
      expect(bulbasaurCard).toBeInTheDocument();
    });

    it("should present the pokemon types", () => {
      const expectedPokemonTypes = 'Grass, Poison'
      const pokemonTypes = ["Grass","Poison"]
      render(<CardComponent name='Bulbasaur' image='/pokemon/bulbasaur.jpg' type={pokemonTypes}/>);  
      
      const bulbasaurCard = screen.getByText(expectedPokemonTypes)
  
      expect(bulbasaurCard).toBeInTheDocument();
    });

    it("should navigate to the chosen pokemon details", () => {
      const expectedPokemonTypes = 'Fire, Flying'
      const pokemonTypes = ["Fire","Flying"]
      
      render(<CardComponent name='Charizard' image='/pokemon/charizard.jpg' type={pokemonTypes}/>);  
      
      fireEvent.click(screen.getByText('Charizard'))
      // This does not work, due we have some limitations with this framework, how could we test the link?
      const charizardCardDetails = screen.getByText(expectedPokemonTypes)

      expect(charizardCardDetails).not.toBeInTheDocument();


      
    });

  });