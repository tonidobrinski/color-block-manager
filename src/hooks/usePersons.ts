import { useState, useEffect } from "react";
import { Person, Block, Color } from "../types/types";

export const usePersons = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const res = await fetch("colors.json");
        const data = await res.json();
        setColors(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to load colors:", error);
      }
    };

    fetchColors();
  }, []);

  const addPerson = (name: string) => {
    const newPerson: Person = {
      id: crypto.randomUUID(),
      name,
      blocks: [],
    };
    setPersons((prev) => [...prev, newPerson]);
  };

  const addBlock = (personId: string) => {
    setPersons((prev) =>
      prev.map((p) =>
        p.id === personId
          ? {
              ...p,
              blocks: [
                ...p.blocks,
                { id: crypto.randomUUID(), color: colors[0]?.hex || "#000" },
              ],
            }
          : p
      )
    );
  };

  const changeBlockColor = (
    personId: string,
    blockId: string,
    newColor: string
  ) => {
    setPersons((prev) =>
      prev.map((p) =>
        p.id === personId
          ? {
              ...p,
              blocks: p.blocks.map((b) =>
                b.id === blockId ? { ...b, color: newColor } : b
              ),
            }
          : p
      )
    );
  };

  const removeBlock = (personId: string, blockId: string) => {
    setPersons((prev) =>
      prev.map((p) =>
        p.id === personId
          ? { ...p, blocks: p.blocks.filter((b) => b.id !== blockId) }
          : p
      )
    );
  };

  return {
    persons,
    colors,
    addPerson,
    addBlock,
    changeBlockColor,
    removeBlock,
  };
};
