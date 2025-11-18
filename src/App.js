import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import UserDetail from './views/UserDetail';

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
