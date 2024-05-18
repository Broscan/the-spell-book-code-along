import React, { useState, useEffect } from "react";
import Spell from "./Spell";

function SpellBook() {
  const [spells, setSpells] = useState([]);
  const [castedSpell, setCastedSpell] = useState({});

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

  function handleOnCastSpell(spell) {
    setCastedSpell(spell);

    if (spell.oneUse) {
      console.log("Can only be casted once");

      // *** Ta bort spell:en från spell listen ***

      // Skapa en helt egen, unik och frikopplad kopia av spells array:en
      let tempSpells = [...spells];
      // Filtrera ut spellen som vi klickat på
      tempSpells = tempSpells.filter((s) => s.id !== spell.id);
      // Uppdatera spells state
      setSpells(tempSpells);

      // Ta bort spellen från databasen
      deleteSpell(spell);
    }
  }

  function deleteSpell(spellToDelete) {
    const deleteOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`http://localhost:3000/spells/${spellToDelete.id}`, deleteOptions);
  }

  return (
    <>
      <h1>{castedSpell.description}</h1>
      {spells.map((s) => (
        <Spell key={s.id} spell={s} onCastSpell={handleOnCastSpell} />
      ))}
    </>
  );
}

export default SpellBook;
