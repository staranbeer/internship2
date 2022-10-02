import { useContext, useState } from "react";
import SearchContext from "./context/SearchContext";

const Form = () => {
  const [isFiltersopen, setIsFiltersOpen] = useState(false);
  const [isDateOpen, setisDateOpen] = useState(false);
  const [isKeywordsOpen, setIsKeywordsOpen] = useState(false);

  const { formValues, setFormValues, handleSubmit } = useContext(SearchContext);

  const handleChange = (property: string, value: string) => {
    setFormValues(property, value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="lg:w-[400px] flex justify-center px-6 py-6 gap-4 w-full bg-[#1d2433]"
    >
      <div className="flex flex-col max-w-[560px] w-full gap-4">
        <input
          type="text"
          value={formValues.input}
          onChange={(e) => handleChange("input", e.target.value)}
          className="input w-full max-w-[560px]"
          placeholder="Enter your query"
        />

        <div className="flex flex-col w-full gap-4">
          <button
            type="button"
            className="text-white font-bold btn-secondary btn self-start"
            onClick={() => setIsFiltersOpen((i) => !i)}
          >
            Show filters
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
                        value={formValues.startYear}
                        onChange={(e) =>
                          handleChange("startYear", e.target.value)
                        }
                        name="startYear"
                        min="1958-04-01"
                        max="2022-04-30"
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
                        value={formValues.endYear}
                        onChange={(e) =>
                          handleChange("endYear", e.target.value)
                        }
                        name="endYear"
                        min="1958-10-01"
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
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-5">
                      {["moon", "sun", "jupiter", "mars"].map((i) => {
                        return (
                          <button
                            type="button"
                            onClick={(e) => {
                              if (formValues.keyword === i) {
                                handleChange("keyword", "");
                              } else {
                                handleChange("keyword", i);
                              }
                            }}
                            key={i}
                            className={`${
                              formValues.keyword === i
                                ? "bg-pink-500"
                                : "bg-gray-700"
                            } btn`}
                          >
                            {i}
                          </button>
                        );
                      })}
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
