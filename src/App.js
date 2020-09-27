import React from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import "./App.css";

function App() {
  const [dark, setDark] = React.useState(0);
  const [guess, setGuess] = React.useState("");
  function checkGuess() {
    if (guess.toLowerCase() === pokemonName) {
      setDark(0.5);
    } else {
      prompt("Keep trying loser");
    }
  }
  const [pokeNumber, setPokeNumber] = React.useState([]);
  const [pokemonName, setPokemonName] = React.useState("");
  const [pokemonSprite, setPokemonSprite] = React.useState("");
  const getPokemon = async () => {
    setPokeNumber(Math.floor(Math.random(1) * 151));
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`;
      const res = await axios.get(url);
      setPokemonName(res.data.name);
      setPokemonSprite(res.data.sprites.back_default);
      setDark(0);
      setGuess(null);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonName);
  console.log(pokemonSprite);
  console.log(guess);

  if (pokemonName) {
    return (
      <div className="app-cont">
        <Pokemon
          style={{ filter: `brightness(${dark})` }}
          sprite={`${pokemonSprite}`}
        />
        <div className="game-wrap">
          <div className="input">
            <input
              type="text"
              placeholder="Not Mewtwo"
              maxLength="20"
              onChange={(event) => setGuess(event.target.value)}
            ></input>
            <input type="submit" value="Guess!" onClick={checkGuess}></input>
          </div>
          <div className="btn">
            <button onClick={getPokemon}>Get a new Pokemon!</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="app-cont">
        <div className="game-wrap">
          <div className="input">
            <input
              type="text"
              placeholder="Not Mewtwo"
              maxLength="20"
              onChange={(event) => setGuess(event.target.value)}
            ></input>
            <input type="submit" value="Guess!" onClick={checkGuess}></input>
          </div>
          <div className="btn">
            <button onClick={getPokemon}>Get a new Pokemon!</button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
