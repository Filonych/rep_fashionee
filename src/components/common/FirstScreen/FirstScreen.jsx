import "./style.css";

function FirstScreen({ name }) {
  return (
    <div className="fs-wrap">
      <div className="title_wrap">
        <h1 className="fs-title">{name}</h1>
        <ul className="subtitle">
          <li>Home</li>
          <li>{name}</li>
        </ul>
      </div>
      <div className="img"></div>
    </div>
  );
}

export default FirstScreen;
