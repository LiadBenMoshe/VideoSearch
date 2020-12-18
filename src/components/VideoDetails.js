import React from "react";

const VideoDetails = ({ video, terms }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  var title = "Link here";
  var link = `https://youtu.be/${video.id.videoId}`;
  var VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  if (terms === "liad") {
    link = "https://github.com/LiadBenMoshe";
    title = "To Liad GitHub Press Here ";
    VideoSrc = `https://www.youtube.com/embed/wDFQMdFKIt0`;
  }

  return (
    <div>
      <div
        style={{ marginTop: "10px", borderRadius: "10%" }}
        className="ui embed"
      >
        <iframe title="Video" src={VideoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <a style={{ textAlign: "center" }} href={link}>
          {title}
        </a>
      </div>
    </div>
  );
};

export default VideoDetails;
