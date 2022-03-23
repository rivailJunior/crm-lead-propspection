import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Index";
import LeadProvider from "./contexts/lead-context";
import PageRoutes from "./routes/Index";

function App() {
  return (
    <div role="app" className="App">
      <Header />
      <BrowserRouter>
        <LeadProvider>
          <PageRoutes />
        </LeadProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
