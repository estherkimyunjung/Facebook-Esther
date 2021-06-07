import React from "react";
import "./Feed.css";
import StoryReal from "./StoryReal";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReal />
      <MessageSender />
      {/* <Post
        key={id}
        profilePic={profilePic}
        message={message}
        timestamp={timestamp}
        username={username}
        image={image}
      /> */}
      <Post
        key="1"
        profilePic="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/97978132_10219020026950441_6194945872950722560_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=MDHY3XXfNvwAX8Dp-ge&tn=5-I3oUs1bFWhCvHE&_nc_ht=scontent-hou1-1.xx&oh=ef48fa510806aaa23a8bfea19b4dbaaa&oe=60E1C229"
        message="This is works!!!"
        timestamp="This is timestamp"
        username="Esther"
        image="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/154595136_10159306322968033_5074848652494213880_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=z6doNKhJIsMAX_it07m&tn=5-I3oUs1bFWhCvHE&_nc_ht=scontent-hou1-1.xx&oh=1f8ed4b8eed2938d150560a6d9b96160&oe=60E4380A"
      />
    </div>
  );
}

export default Feed;
