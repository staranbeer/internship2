import { useState } from "react";

const initialState = {
  input: "",
  startYear: "",
  endYear: "",
  keyword: "",
};

const useForm = () => {
  let [formValues, setValues] = useState(initialState);

  const setFormValues = (property: string, value: string) => {
    setValues((prevValues) => {
      return { ...prevValues, [property]: value };
    });
  };

  console.log(formValues);
  return [formValues, setFormValues] as const;
};

export default useForm;
