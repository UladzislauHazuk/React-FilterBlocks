import style from "./style.module.scss";
import { Button, Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const Search = () => {
  
  const [input, setInput] = useState('');
  const showInputValue = () => {
    console.log(input);
  }
  
  return (
    <div className={style["wrapper"]}>
      <Input
      onChange={(event) => setInput(event.target.value)}
        className={style["search-input"]}
        icon={<IconSearch />}
        rightSection={<Button onClick={showInputValue} className={style["search-btn"]}>Поиск</Button>}
        placeholder="Введите название вакансии"
      />
    </div>
  );
};

export default Search;
