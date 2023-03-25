import React, { useState } from "react";
import "../style/reset.css";
import "../style/search.css";
import { useNavigate } from "react-router-dom";

function Search(props) {
  const navigate = useNavigate();
  const [inputvalue, setValue] = useState("");
  console.log(inputvalue);

  const navigateToPurchase = () => {
    navigate("/result", {
      state: {
        Text: `${inputvalue}`,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target[0].value;
    if (query === "") {
      alert("검색어를 입력해주세요.");
      return;
    }
    setValue(query);
    props.setValue(query);
    navigateToPurchase();
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="query"
          className="search-bar-main"
          placeholder="도시나 관광지를 검색해보세요"
        />
        <button type="submit" onClick={navigateToPurchase}></button>
      </form>
    </div>
  );
}
export default Search;
