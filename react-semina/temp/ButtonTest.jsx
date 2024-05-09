function MyButton() {
  return <button>I'm a button</button>;
}

export default function ButtonTest() {
  const element = <h1>JSX code</h1>;

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      {element}
    </div>
  );
}
