import React, { useState, useEffect } from "react";
import Spell from "./Spell";

function SpellBook(props) {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    // Hämta spells och sätt spells-variabeln
    fetch("http://localhost:3000/spells")
      .then((res) => res.json())
      .then((data) => setSpells(data));
  }, []);

  // //Hook för när spells variabeln ändras
  //   useEffect(() => {
  //     if (spells.length > 0) console.log("Spells have been set!");
  //   }, [spells]);

  return (
    <>
      {spells.map((s) => (
        <h1>{s.name}</h1>
      ))}
    </>
  );
}

export default SpellBook;
