
import './App.css';
import { useState } from 'react';
import MyButton from './MyButton';
import About from './About';

function App() {
  function handleClick(){
        setCount(count+1)
        alert(`clicked ${count+1} times`);
    }
    const [count, setCount] = useState(0);  
  return (
    <>
      <h1>reda ziyani</h1>
      <MyButton count={count} onClick={handleClick} ></MyButton>
      <MyButton count={count} onClick={handleClick} ></MyButton>
      <About></About>
    </>
  );
}

export default App;

