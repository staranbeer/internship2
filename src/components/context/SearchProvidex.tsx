import React, { ReactNode } from "react";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import SearchContext from "./SearchContext";

let SEARCH_URL = `https://images-api.nasa.gov/search?media_type=image&q=`;

const SearchProvidex = ({ children }: { children: ReactNode }) => {
  const [formValues, setFormValues] = useForm();
  const [queryResponse, fetchData] = useFetch();

  const { input, startYear, endYear, keyword } = formValues;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (input.trim().length == 0) {
      return;
    }

    fetchData(SEARCH_URL + input);
    // setFormValues("input", "");
  }
  return (
    <SearchContext.Provider
      value={{
        formValues,
        setFormValues,
        cardList: queryResponse,
        handleSubmit,
        fetchData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvidex;
