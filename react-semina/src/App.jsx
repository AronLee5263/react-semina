// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
//     </div>
//   );
// }

// export default App;

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
