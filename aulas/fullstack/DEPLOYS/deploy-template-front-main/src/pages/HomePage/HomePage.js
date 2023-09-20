import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import PlaylistCard from "../../components/PlaylistCard";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToLoginPage } from "../../routes/coordinator";

export default function HomePage() {
  const navigate = useNavigate();

  const context = useContext(GlobalContext);
  const { playlists, fetchPlaylists } = context;

  const [isLoading, setIsLoading] = useState(false)
  const [playlistName, setPlaylistName] = useState("")

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPlaylists();
    }
  }, []);

  const createPlaylist = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const body = {
        name: playlistName
      }

      await axios.post(BASE_URL + "/playlists", body, config);

      setPlaylistName("");
      setIsLoading(false)
      fetchPlaylists()
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  return (
    <main>
      <Header />
      <section>
        <form onSubmit={createPlaylist}>
          <h1>Criar playlist</h1>
          <section>
            <label>Nome</label>
            <input value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} />
          </section>
          <button disabled={isLoading}>Criar</button>
        </form>
      </section>

      <hr />
      <h1>Playlists</h1>

      <section>
        {playlists.map((playlist) => {
          return <PlaylistCard key={playlist.id} playlist={playlist} />;
        })}
      </section>
    </main>
  );
}
