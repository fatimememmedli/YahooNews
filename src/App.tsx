import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  const content = useRoutes(routes);
  return (
    <>
      <Navbar />
      {content}
    </>
  );
}

export default App;
