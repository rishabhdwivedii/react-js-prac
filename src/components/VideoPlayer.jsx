import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VideoPlayer = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${id}`, { responseType: "blob" })
      .then((response) => {
        const videoBlob = new Blob([response.data], { type: "video/mp4" });
        const videoUrl = URL.createObjectURL(videoBlob);
        setContent(videoUrl);
      })
      .catch((error) => {
        console.error("Error fetching video:", error);
      });
  }, [id]);

  //   useEffect(() => {
  //     fetch("http://localhost:3000/")
  //       .then((res) => res.blob())
  //       .then((videoBlob) => {
  //         const videoUrl = URL.createObjectURL(videoBlob);
  //         setContent(videoUrl);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching video:", error);
  //       });
  //   }, []);

  return (
    <div>{content ? <video controls src={content} /> : <p>Loading...</p>}</div>
  );
};

export default VideoPlayer;
