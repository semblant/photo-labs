import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = ({ topics, getTopicsByPhotos }) => {
  return (
    <div className="topic-list__item">
      <span key={topics.id} onClick={() => getTopicsByPhotos(topics.id)} >{topics.title}</span>
    </div>
  );
};


export default TopicListItem;
