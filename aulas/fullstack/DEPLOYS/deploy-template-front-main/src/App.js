import { useEffect, useState } from "react";
import { GlobalStyle } from "./GlobalStyle.styled";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./routes/Router";
import axios from "axios";
import { BASE_URL, TOKEN_NAME } from "./constants/url";

export default function App() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if (token) {
      fetchPlaylists();
    }
  }, []);

  const fetchPlaylists = async () => {
    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const response = await axios.get(BASE_URL + "/playlists", config);

      setPlaylists(response.data);
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  const context = {
    playlists,
    fetchPlaylists
  };

  return (
    <>
      <GlobalStyle />
        <GlobalContext.Provider value={context}>
          <Router />
        </GlobalContext.Provider>
    </>
  );
}
