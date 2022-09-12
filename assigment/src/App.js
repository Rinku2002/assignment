import './App.css';
import Quiz from './components/quiz/quiz';
import Home from './components/home/home';
import {Routes,Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/quiz" element={<Quiz/>}/>
      </Routes>
    </div>
  );
}

export default App;
