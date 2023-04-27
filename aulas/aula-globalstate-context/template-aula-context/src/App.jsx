import Router from "./routes/Router";
import { GlobalState } from "./contexts/GlobalState";

export default function App() {
  
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}
