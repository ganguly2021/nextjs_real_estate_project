import axios from "axios";

// base url
export const baseUrl = "bayut.p.rapidapi.com";

// api headers
const headers = {
  "x-rapidapi-host": "bayut.p.rapidapi.com",
  "x-rapidapi-key": "abdbe95236msh9a4349c53ede780p116d40jsn7d9e0fdd3c01",
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: headers,
  });
};
