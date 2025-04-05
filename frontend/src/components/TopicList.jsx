import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics, getTopicsByPhotos }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics && topics.map((topic) =>
        <TopicListItem key={topic.id} topics={topic} getTopicsByPhotos={getTopicsByPhotos} />
      )}
      {!topics && <p>Loading topics...</p>}
    </div>
  );
};

export default TopicList;
