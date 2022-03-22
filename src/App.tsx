import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Index";
import UsersProvider from "./contexts/usersContext";
import PageRoutes from "./routes/Index";

function App() {
  return (
    <div role="app" className="App">
      <Header />
      <BrowserRouter>
        <UsersProvider>
          <PageRoutes />
        </UsersProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
