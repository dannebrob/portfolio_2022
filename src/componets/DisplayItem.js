import "./DisplayItem.css";

function DisplayItem(props) {
  return (
    <div className="item">
      <img alt="project" src={props.image} />
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
      <p className="tags">Tags: {props.tags}</p>
    </div>
  );
}

export default DisplayItem;
