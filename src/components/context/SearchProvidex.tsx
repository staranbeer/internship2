import React, { ReactNode } from "react";
import useFetch from "../../hooks/useFetch";
import useForm from "../../hooks/useForm";
import SearchContext from "./SearchContext";

let SEARCH_URL = `https://images-api.nasa.gov/search?media_type=image&q=`;

const SearchProvidex = ({ children }: { children: ReactNode }) => {
  const [formValues, setFormValues] = useForm();
  const [queryResponse, fetchData] = useFetch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formValues.input.trim().length == 0) {
      return;
    }

    let inputQuery = formValues.input;
    let keywordQuery = formValues.keyword;
    let dateQuery = formValues.startYear;

    if (formValues.startYear.trim().length !== 0) {
      if (formValues.endYear.trim().length !== 0) {
        dateQuery = `&year_start=${
          formValues.startYear.split("-")[0]
        }&year_end=${formValues.endYear.split("-")[0]}`;
      } else {
        dateQuery = `&year_start=${
          formValues.startYear.split("-")[0]
        }&year_end=${2022}`;
      }
    } else {
      dateQuery = "";
    }

    if (keywordQuery.trim().length !== 0) {
      keywordQuery = `&keywords=${keywordQuery}`;
    } else {
      keywordQuery = "";
    }

    fetchData(SEARCH_URL + inputQuery + dateQuery + keywordQuery);
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
