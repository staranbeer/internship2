import React, { SetStateAction } from "react";

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  setInputValue: React.Dispatch<SetStateAction<string>>;
}
const Form = ({ handleSubmit, inputValue, setInputValue }: FormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="flex justify-center px-6 py-5 gap-4 w-full bg-red-300"
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input w-full max-w-lg"
        placeholder="Enter your query"
      />

      {/* keywords to search for */}

      <button className="btn">Search</button>
    </form>
  );
};

export default Form;
