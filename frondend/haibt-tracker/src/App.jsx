import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HabitTrackerPage from './pages/HabitTrackerPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HabitTrackerPage />} />
      </Routes>
    </Router>
  );
}

export default App;