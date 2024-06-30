import "../styles/Nav.css";

export default function Nav({ setCookies, setCps }) {
  function Reset() {
    setCookies(0), setCps(0);
  }
  return (
    <div className="nav-bar">
      <h1 className="title-text">Cookie Clicker</h1>
      <button onClick={Reset} className="button-reset">
        Reset
      </button>
    </div>
  );
}
