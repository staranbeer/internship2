import { useState } from "react";

const useLocalStorage = (key: string = "liked", initialState = []) => {
  const [liked, toggleLiked] = useState(() => {
    const localData = localStorage.getItem(key);
    return localData ? JSON.parse(localData) : initialState;
  });

  const setLiked = (value: string) => {
    toggleLiked((prevState: string[]) => {
      if (liked.indexOf(value) !== -1) {
        let filtered = prevState.filter((item: string) => item !== value);
        localStorage.setItem(key, JSON.stringify(filtered));
        return filtered;
      } else {
        localStorage.setItem(key, JSON.stringify([...prevState, value]));
        return [...prevState, value];
      }
    });
    console.log(liked);
  };
  return [liked, setLiked] as const;
};

export default useLocalStorage;
