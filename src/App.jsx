import "./App.css";
import SideFeed from "./components/SideFeed";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div>
      <div className="bg-red-400">nav</div>
      <div className="grid grid-cols-12 h-screen">
        <div className="bg-green-600 col-span-8">
          <VideoPlayer />
        </div>
        <div className="bg-yellow-700 col-span-4">
          <SideFeed />
        </div>
      </div>
    </div>
  );
}

export default App;
