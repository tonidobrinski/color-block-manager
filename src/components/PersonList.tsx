import { useState } from "react";
import { usePersons } from "../hooks/usePersons";
import PersonCard from "../components/PersonCard";
import TextField from "@mui/material/TextField";
import "../styles/PersonList.scss";

const PersonList = () => {
  const {
    persons,
    colors,
    addPerson,
    addBlock,
    changeBlockColor,
    removeBlock,
  } = usePersons();
  const [nameInput, setNameInput] = useState("");

  const handleAdd = () => {
    if (nameInput.trim()) {
      addPerson(nameInput);
      setNameInput("");
    }
  };

  return (
    <div className="person-list-container">
      <div className="input-field">
        <TextField
          label="Name of person"
          variant="outlined"
          fullWidth
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>
      {persons.map((person) => (
        <PersonCard
          key={person.id}
          person={person}
          colors={colors}
          onAddBlock={addBlock}
          onChangeColor={changeBlockColor}
          onRemoveBlock={removeBlock}
        />
      ))}
    </div>
  );
};

export default PersonList;
