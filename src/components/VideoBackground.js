import bgVideo from '../assets/videos/bg-video.mov';
const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
