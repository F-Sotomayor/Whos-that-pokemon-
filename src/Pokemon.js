import React from "react";

function Pokemon(props) {
  return (
    <div className="pokemonContainer">
      <img style={props.style} src={`${props.sprite}`} alt="pokemon" />
    </div>
  );
}

export default Pokemon;
