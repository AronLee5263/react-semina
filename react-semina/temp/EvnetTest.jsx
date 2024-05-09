import "./App.css";

const Header = (props) => {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={function (event) {
            event.preventDefault();
            props.onClick();
          }}
        >
          WEB
        </a>
      </h1>
    </header>
  );
};

const Nav = ({ onClick }) => {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a
            href="/read/3"
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
            js
          </a>
        </li>
      </ol>
    </nav>
  );
};

const handleClickHeader = () => {
  console.log("클릭 !");
};

const handleClickNavHannder = () => {
  alert("js 클릭");
};

function App() {
  return (
    <div>
      <Header onClick={handleClickHeader}></Header>
      <button onClick={handleClickHeader} style={{ backgroundColor: "tomato" }}>
        버튼
      </button>
      <Nav onClick={handleClickNavHannder} />
      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default App;
