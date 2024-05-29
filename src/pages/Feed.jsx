import { useState, useEffect } from "react";
import axios from "axios";

import VideoCard from "../components/VideoCard";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const getVideos = async () => {
    try {
      let res = await axios.get("http://localhost:3000/feed");
      setVideos(res.data);
      console.log("Videos fetched!");
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div>
      {videos.map((title, index) => (
        <VideoCard key={index} title={title} />
      ))}
    </div>
  );
};

export default Feed;
