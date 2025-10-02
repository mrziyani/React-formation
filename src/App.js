import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MyButton from './MyButton';
import About from './About';
import Login from './Login';

function App() {
  const [count, setCount] = useState(0);

  function handleClickTest() {
    setCount(count + 1);
    alert(`clicked ${count + 1} times`);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home count={count} handleClickTest={handleClickTest} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}


function Home({ count, handleClickTest }) {
  const navigate = useNavigate();

  return (
    <>
      <h1>reda ziyani Quick start</h1>
      <MyButton count={count} onClick={handleClickTest}></MyButton>
      <MyButton count={count} onClick={handleClickTest}></MyButton>
      <About />
      <button onClick={() => navigate('/login')}>
        Go to Login to test login
      </button>
    </>
  );
}

export default App;
