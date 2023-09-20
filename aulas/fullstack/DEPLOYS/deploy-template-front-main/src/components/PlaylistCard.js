import axios from "axios";
import { useContext, useState } from "react";
import { BASE_URL, TOKEN_NAME } from "../constants/url";
import { GlobalContext } from "../contexts/GlobalContext";

export default function PlaylistCard(props) {
  const { playlist } = props;

  const context = useContext(GlobalContext);
  const { fetchPlaylists } = context;

  const [isLoading, setIsLoading] = useState(false)

  const like = async () => {
    setIsLoading(true)

    try {
      const token = window.localStorage.getItem(TOKEN_NAME);

      const config = {
        headers: {
          Authorization: token
        }
      };

      const body = {
        like: true
      }

      await axios.put(BASE_URL + `/playlists/${playlist.id}/like`, body, config);

      setIsLoading(false)
      fetchPlaylists()
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data)
    }
  };

  return (
    <article>
      <h2>
        {playlist.name}

        <span onClick={like} style={{ cursor: "pointer" }}>
          {" "}👍 {playlist.likes}
        </span>
      </h2>

      <p>criada por {playlist.creator.name}</p>

      <br />
      <br />
    </article>
  );
}
