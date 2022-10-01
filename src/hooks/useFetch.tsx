import { useCallback, useEffect, useState } from "react";

const useFetch = () => {
  const [queryResponse, setQueryResponse] = useState<any>([]);

  /**
   * A function to fetch data from the an api
   *
   * @param URL URL to fetch data from
   * */
  const fetchData = useCallback(async (siteURL: string) => {
    console.log(siteURL);

    let response = fetch(siteURL);

    response
      .then((data) => data.json())
      // limiting the number of responses
      .then((data) => data?.collection.items.slice(0, 2))
      // data transformations
      .then((data) => {
        return data.map((item: any) => {
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
      // setting data to state
      .then((data) => {
        setQueryResponse(data);
        return data;
      })
      .catch((err) => console.log(err.message));
  }, []);

  return [queryResponse, fetchData] as const;
};

export default useFetch;
