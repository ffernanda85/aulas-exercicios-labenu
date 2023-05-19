import { useProtectedPage } from "../hooks/useProtectedPage";
import { useRequestData } from "../hooks/useRequestData";

function FeedPage() {
  useProtectedPage()

  const token = localStorage.getItem('token')
  const headers = {
    headers: {
      Authorization: token
    }
  }
  const [data] = useRequestData([], "/recipe/all", headers)

  return (
    <main>
      <h1>Página de Feed</h1>
      {
        data.map(e => {
          return (
            <div key={e.id}>
              <h2>{ e.title }</h2>
              <img src={e.imageUrl} width='700px' />
            </div>
          )
        })
      }
    </main>
  );
}

export default FeedPage;
