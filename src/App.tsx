import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Index";
import PageRoutes from "./routes/Index";

function App() {
  return (
    <div role="app" className="App">
      <Header />
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
