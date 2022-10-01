import React, { useState } from "react";
import Form from "./components/Form";
import Main from "./components/Main/Main";
import useFetch from "./hooks/useFetch";

let SEARCH_URL = `https://images-api.nasa.gov/search?media_type=image&q=`;

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [queryResponse, fetchData] = useFetch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputValue.trim().length == 0) {
      return;
    }

    fetchData(SEARCH_URL + inputValue);
    setInputValue("");
  }

  return (
    <div>
      <Form
        inputValue={inputValue}
        handleSubmit={handleSubmit}
        setInputValue={setInputValue}
      />

      <Main cardList={queryResponse} />
    </div>
  );
};

// https://images-api.nasa.gov/search?q=apollo&media_type=image

export default App;
