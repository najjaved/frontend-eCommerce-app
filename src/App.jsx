import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ListPage" element={<ListPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
