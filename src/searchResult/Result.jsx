import React from "react";
import ReactDOM from "react-dom";
import ListItem from "../component/ListItem";
import "../style/search-result.css";
import noPic from "../resources/icons/no_image.gif";

function Result(props) {
  const data = props.data ? props.data : [];

  const listItems = Array.from(data).map((item) => {
    return (
      <ListItem
        key={item.contentid}
        picture={item.firstimage !== "" ? item.firstimage : noPic}
        name={item.title}
        contentid={item.contentid}
      />
    );
  });

  return (
    <div className="search-result-page">
      <ul className="result-list">{listItems}</ul>
    </div>
  );
}

export default Result;
