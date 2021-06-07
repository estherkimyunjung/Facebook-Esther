import React from "react";
import "./Feed.css";
import StoryReal from "./StoryReal";
import MessageSender from "./MessageSender";

function Feed() {
  return (
    <div className="feed">
      {/* StoryReal */}
      <StoryReal />
      {/* MessageSender */}
      <MessageSender />
    </div>
  );
}

export default Feed;
