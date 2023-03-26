import React from "react";
import ReactDOM from "react-dom";
import ListItem from "../component/ListItem";
import "../style/search-result.css";
import noPic from "../resources/icons/no_image.gif";
import { Link } from "react-router-dom";

function Result(props) {
  const data = props.data;

  const listItems = Array.from(data).map((item) => {
    return (
      <Link
        to={{
          pathname: `/detail/${item.contentid}`,
          state: { latitude: item.latitude, longitude: item.longitude },
        }}
        key={item.contentid}
      >
        <ListItem
          picture={item.firstimage !== "" ? item.firstimage : noPic}
          name={item.title}
          contentid={item.contentid}
        />
      </Link>
    );
  });

  return (
    <div className="search-result-page">
      <ul className="result-list">{listItems}</ul>
    </div>
  );
}

export default Result;
