import "./App.css";

function App() {
  function handleClick() {
    alert("button click");
  }

  const handleClick2 = () => {
    alert("button 2 clicked");
  };

  const addFive = (num) =>{
    alert(num + 5);
  }

  return (
    <>
      <h1>core Concepts 2</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        third
      </button>
      <button onClick={addFive}>Four</button>
    </>
  );
}

export default App;
