import { BrowserRouter  as Router, Routes, Route } from "react-router-dom"
import Fin from "./pages/Fin";
import Home from "./pages/Home";
import Video from "./pages/Video";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/fin" element={<Fin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
