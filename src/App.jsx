import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import RecommendationPage from './pages/RecommendationPage';
import FeedbackPage from './pages/FeedbackPage';
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import Navbar from './components/Navbar';
import ChatBot from "./components/ChatBot";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div className='background'>
        </div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/stats" element={<StatsPage />} /> */}
            <Route path="/recommendations" element={<RecommendationPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        <div className="footer">
          &#60;/&#62; 404 brail not found
        </div>
        <ChatBot />

      </div>
    </Router>
  );
}

export default App;