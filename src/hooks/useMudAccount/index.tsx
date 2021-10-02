import React, { useContext } from "react";

import {
  IMudAccountContext,
  MudAccountContext,
} from "../../context/mudAccountContext";

export function useMudAccount(): IMudAccountContext {
  const { characterDataSet, characters, setTask, addCharacter } =
    useContext(MudAccountContext);

  return {
    characterDataSet,
    characters,
    setTask,
    addCharacter,
  };
}
