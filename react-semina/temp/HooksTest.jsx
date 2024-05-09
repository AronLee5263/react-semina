import "./App.css";

const Header = ({ clicker }) => {
  return (
    <header onClick={clicker}>
      <h1>{/* <a href="/">WEB</a> */} 헤더</h1>
    </header>
  );
};

const clickHandler = () => {
  console.log("클릭 !");
};

function TestEvent() {
  return (
    <div>
      <Header clicker={clickHandler} />
      <button onClick={clickHandler} style={{ backgroundColor: "tomato" }}>
        버튼
      </button>
      <nav>
        <ol>
          <li>
            <a href="/read/1">html</a>
          </li>
          <li>
            <a href="/read/2">css</a>
          </li>
          <li>
            <a href="/read/3">js</a>
          </li>
        </ol>
      </nav>

      <article>
        <h2>Welcome</h2>
        Hello, WEB
      </article>
    </div>
  );
}

export default TestEvent;
