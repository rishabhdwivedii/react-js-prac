import axios from "axios";
import { useState, useEffect } from "react";

const VideoPlayer = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/", { responseType: "blob" })
      .then((response) => {
        const videoBlob = new Blob([response.data], { type: "video/mp4" });
        const videoUrl = URL.createObjectURL(videoBlob);
        setContent(videoUrl);
      })
      .catch((error) => {
        console.error("Error fetching video:", error);
      });
  }, []);

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
    <div>
      {content && (
        <video controls>
          <source src={content} type="video/mp4" />
        </video>
      )}{" "}
    </div>
  );
};

export default VideoPlayer;
