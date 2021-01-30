import React, { useState } from 'react';
import ReactDOM from 'react-dom'

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
      ({ count })
    </button>
  )
}

function Button({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  )
}

<<<<<<< HEAD
function Buttons({ onClick }) {
=======
function Buttons({ count, onClick }) {
>>>>>>> a65ad7a669c4bcad52bf1b1e36eaec937bb81c9c
  return (
    <p>
      {[1, 2, 3].map((i) => (
        <Button key={i} onClick={onClick}>
          {i}
        </Button>
      ))}
    </p>
  )
}

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons 
<<<<<<< HEAD
        count = {Counter.count}
=======
        count={count}
>>>>>>> a65ad7a669c4bcad52bf1b1e36eaec937bb81c9c
        onClick={onClick}
      />  
    </div>
  )
}

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1
    });
  }

  console.log(count)

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);