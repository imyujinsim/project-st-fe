import React from "react";
import ReactDOM from "react-dom";
import ListItem from "../component/ListItem";
import "../style/search-result.css";
import noPic from "../resources/icons/no_image.gif";

function Result(props) {
  const data = props.data;

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

// function Result(props) {
//   const data = props.data;
//   const parent = document.querySelector(".result-list");

//   Array.from(data).forEach((item) => {
//     const pic = item.firstimage;
//     console.log(pic);

//     ReactDOM.render(
//       <ListItem
//         picture={item.firstimage}
//         name={item.title}
//         contentid={item.contentid}
//       />,
//       parent
//     );
//   });
//   return (
//     <div className="search-result-page">
//       <ul className="result-list">
//         {/* {Array.from(data).forEach((item) => {

//         })} */}
//       </ul>
//     </div>
//   );
// }

export default Result;
