import React from "react";
import "./VideoItem.css";

const VideoItem = (props) => {
  return (
    <div onClick={() => props.onVideo(props.video)} className="video-item item">
      <img
        alt={props.video.snippet.thumbnails.medium.url}
        className="ui image"
        style={{ borderRadius: "10%" }}
        src={props.video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
