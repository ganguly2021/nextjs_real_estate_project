import axios from "axios";

// base url
export const baseUrl = "https://bayut.p.rapidapi.com";

// api headers
const headers = {
  "x-rapidapi-host": "bayut.p.rapidapi.com",
  "x-rapidapi-key": "",
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: headers,
  });

  return data;
};
