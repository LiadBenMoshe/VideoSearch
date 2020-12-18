import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const maping = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideo={props.onVideoSelect}
        video={video}
      />
    );
  });
  return (
    <div>
      <div className="ui relaxed divided list">{maping}</div>
    </div>
  );
};

export default VideoList;
