import { type } from "@testing-library/user-event/dist/type";
import "./DisplayItem.css";

function DisplayItem(props) {
  const tagItems = props.tags;

  const generateTags = tagItems.map((item) => {
    return <p>{item}</p>;
  });

  return (
    <div className="item">
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
        <p className="item-text">{props.text}</p>
        <div className="tags">{generateTags}</div>
      </div>
    </div>
  );
}

export default DisplayItem;
