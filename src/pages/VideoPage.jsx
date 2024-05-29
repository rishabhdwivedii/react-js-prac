import VideoPlayer from "../components/VideoPlayer";
import SideFeed from "../components/SideFeed";

const VideoPage = () => {
  return (
    <div>
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
};

export default VideoPage;
