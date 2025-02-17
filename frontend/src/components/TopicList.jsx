import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.topicData && topics.topicData.map((topic) =>
        <TopicListItem key={topic.id} title={topic.title}/>
      )}
      {!topics.topicData && <p>Loading topics...</p>}
    </div>
  );
};

export default TopicList;
