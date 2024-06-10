import logo from './logo.svg';
import './App.css';
import Addstudents from './components/Addstudents';
import ViewFriend from './components/ViewFriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Addstudents/>}/>
      <Route path='/view' element={<ViewFriend/>}/>
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
