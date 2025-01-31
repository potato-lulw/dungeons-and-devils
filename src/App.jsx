import CharacterSheet from "./components/CharacterSheet";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character" element={<CharacterSheet/>} />
        </Routes>
      </BrowserRouter>

      
    </>
  );
}

export default App;
