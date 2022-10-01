import React, {
  FormEvent,
  FormEventHandler,
  useCallback,
  useState,
} from "react";

// site url

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [queryResponse, setQueryResponse] = useState<any>([]);
  const [images, setImages] = useState([]);

  const fetchData = useCallback(async (searchQuery: string) => {
    let SITE_URL = `https://images-api.nasa.gov/search?q=${searchQuery}&media_type=image`;
    let response = fetch(SITE_URL);

    response
      .then((data) => data.json())
      // limiting the number of responses
      .then((data) => data?.collection.items.slice(0, 2))
      // data transformations
      .then((data) => {
        return data.map((item) => {
          return {
            id: item.data[0].nasa_id,
            title: item.data[0].title,
            description: item.data[0].description,
            image: item.links[0].href,
            keywords: item.data[0].keywords,
            dateCreated: item.data[0].date_created,
          };
        });
      })
      .then((data) => {
        console.log(data);
        return data;
      })

      // setting data
      .then((data) => {
        setQueryResponse(data);
        return data;
      })
      .catch((err) => console.log(err.message));
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputValue.trim().length == 0) {
      return;
    }

    fetchData(inputValue);
    setInputValue("");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex justify-center py-5 gap-4"
      >
        <input
          type="text"
          name=""
          id=""
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input"
          placeholder="Enter your query"
        />

        <button className="btn">Search</button>
      </form>
      <main className="">
        {queryResponse.map((res) => {
          return <pre key={res.id}>{JSON.stringify(res, null, 2)}</pre>;
        })}
      </main>
    </div>
  );
};

// https://images-api.nasa.gov/search?q=apollo&media_type=image

export default App;
