import { useState } from "react";

import React from "react";

type AddCategoryProps = {
  onNewCategory: (category: string) => void;
};

export const AddCategory: React.FC<AddCategoryProps> = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputValue("");
    onNewCategory(inputValue);
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <input
        value={inputValue}
        onChange={onInputChange}
        type="text"
        placeholder="Buscar gifs"
      />
    </form>
  );
};
