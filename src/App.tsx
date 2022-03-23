import { BrowserRouter } from "react-router-dom";
import LeadProvider from "./contexts/lead-context";
import PageRoutes from "./routes/Index";

function App() {
  return (
    <div role="app" className="App">
      <BrowserRouter>
        <LeadProvider>
          <PageRoutes />
        </LeadProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
