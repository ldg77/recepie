import { useState, useEffect } from "react";

const useFetch = (url, param = "", trigger) => {
  const INITIAL = {
    data: [],
    isPending: true,
    error: "",
  };

  const [serverData, setServerData] = useState(INITIAL);

  useEffect(() => {
    fetch(`${url}/${param}`)
      .then((res) => res.json())
      .then((json) => {
        setServerData(
          (prev) => (prev = { ...prev, data: json, isPending: false })
        );
      })
      .catch((err) =>
        setServerData((prev) => (prev = { ...prev, error: err }))
      );
  }, [url, trigger]);
  return [serverData, setServerData];
};

export default useFetch;
