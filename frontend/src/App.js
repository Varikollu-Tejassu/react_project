import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<Sidebar/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
