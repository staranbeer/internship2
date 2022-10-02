import React, { SetStateAction, useState } from "react";

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  setInputValue: React.Dispatch<SetStateAction<string>>;
}
const Form = ({ handleSubmit, inputValue, setInputValue }: FormProps) => {
  const [isFiltersopen, setIsFiltersOpen] = useState(false);
  const [isDateOpen, setisDateOpen] = useState(false);
  const [isKeywordsOpen, setIsKeywordsOpen] = useState(false);

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="lg:w-[400px] flex justify-center px-6 py-6 gap-4 w-full bg-[#1d2433]"
    >
      <div className="flex flex-col max-w-[560px] w-full gap-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input w-full max-w-[560px]"
          placeholder="Enter your query"
        />

        <div className="flex flex-col w-full gap-4">
          <button
            type="button"
            className="text-white font-bold btn-secondary btn self-start"
            onClick={() => setIsFiltersOpen((i) => !i)}
          >
            Enable filters
          </button>
          {isFiltersopen && (
            <>
              <div className="">
                <button
                  type="button"
                  className="bg-[#16181d] border border-gray-700 btn w-full"
                  onClick={() => setisDateOpen((i) => !i)}
                >
                  Filter by date
                </button>
                {isDateOpen && (
                  <div className="mt-4 flex flex-col gap-4 md:gap-8 sm:flex-row lg:flex-col">
                    <div className="flex-1 gap-6 flex items-center">
                      <label
                        className="text-gray-300 font-bold"
                        htmlFor="start-date"
                      >
                        Start Date
                      </label>
                      <input
                        id="start-date"
                        className="flex-1"
                        type="date"
                        name="party"
                        min="1958-04-01"
                        max="2017-04-30"
                      />
                    </div>

                    <div className="flex-1 gap-6 flex items-center ">
                      <label
                        className="text-gray-300 font-bold"
                        htmlFor="end-date"
                      >
                        End date
                      </label>
                      <input
                        id="end-date"
                        className="flex-1"
                        type="date"
                        name="party"
                        min="2022-10-01"
                        max="2017-04-30"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  className="bg-[#16181d] border border-gray-700 btn w-full"
                  onClick={() => setIsKeywordsOpen((i) => !i)}
                >
                  Filter by Keywords
                </button>
                {isKeywordsOpen && (
                  <div className="mt-4 flex flex-col gap-4 md:gap-8 sm:flex-row lg:flex-col">
                    <div className="flex-1 gap-6 flex items-center">
                      <label
                        className="text-gray-300 font-bold"
                        htmlFor="start-date"
                      >
                        Start Date
                      </label>
                      <input
                        id="start-date"
                        className="flex-1"
                        type="date"
                        name="party"
                        min="1958-04-01"
                        max="2017-04-30"
                      />
                    </div>

                    <div className="flex-1 gap-6 flex items-center ">
                      <label
                        className="text-gray-300 font-bold"
                        htmlFor="end-date"
                      >
                        End date
                      </label>
                      <input
                        id="end-date"
                        className="flex-1"
                        type="date"
                        name="party"
                        min="2022-10-01"
                        max="2017-04-30"
                      />
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <button className="btn">Search</button>
      </div>
    </form>
  );
};

export default Form;
