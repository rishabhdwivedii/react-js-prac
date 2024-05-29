import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import VideoPage from "./pages/VideoPage";
import Feed from "./pages/Feed";
import Upload from "./pages/Upload";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-400">nav</div>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/:id" element={<VideoPage />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
