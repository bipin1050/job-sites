import Mainpage from './pages/mainpage/mainpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/errorpage/error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
