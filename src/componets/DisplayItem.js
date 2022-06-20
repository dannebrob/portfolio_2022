import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import "./DisplayItem.css";

function DisplayItem(props) {
  const [showMore, setShowMore] = useState(false);
  const tagItems = props.tags;

  const generateTags = tagItems.map((item) => {
    return <p key={item.id}>{item}</p>;
  });

  return (
    <div key={props.id} className="item">
      <img alt="project" src={props.image} />
      <div className="item-text-container">
        <div className="item-title-container">
          <h2 className="item-title">{props.title}</h2>
          <a className="github-link" href={props.github}>
            <img
              alt="Github"
              src="https://img.icons8.com/glyph-neue/64/000000/github.png"
            />{" "}
          </a>
          <a className="web-link" href={props.webpage}>
            <img
              alt="Link to website"
              src="https://img.icons8.com/glyph-neue/64/000000/share-3.png"
            />{" "}
          </a>
        </div>
        <p className="item-preamble">{props.preamble}</p>
        <p className="item-text">
          {showMore ? props.text : props.text.substring(0, 100) + "..."}
        </p>
        <p>
          <button
            className="show-more-btn"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {!showMore ? "Continue reading ⟫" : "Show Less "}
          </button>
        </p>
        <div className="tags">{generateTags}</div>
      </div>
    </div>
  );
}

export default DisplayItem;
