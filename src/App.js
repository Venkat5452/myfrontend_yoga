import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={
          <Register/> 
        }/>
       </Routes>
    </div>
  );
}

export default App;
