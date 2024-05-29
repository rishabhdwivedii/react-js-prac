const VideoCard = ({ title }) => {
  return (
    <div className="bg-gray-300">
      <img src={"thumbnail.jpg"} alt="thumbnail"></img>
      <div>{title}</div>
    </div>
  );
};

export default VideoCard;
