import React from "react";

function Spell(props) {
  return (
    <>
      <h2> {props.spell.name}</h2>
      <button onClick={() => props.onCastSpell(props.spell)}>Cast spell</button>
      <br />
      <hr />
    </>
  );
}

export default Spell;
