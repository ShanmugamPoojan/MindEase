import DailyCheckinCard from '../components/DailyCheckinCard';
import Features from '../components/Features';
import { Link } from 'react-router-dom';
import './styling/HomePage.css';
import Articles from '../components/Articles.jsx';


function HomePage() {
  return (
    <div className="home-page">
      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to MindEase!</h1>
        <h2>A safe space for sharing, learning, and fostering mental well-being. Whether you're here to find strategies, stories, or support, this is your companion for navigating the journey to better mental health.</h2>
        <p>"Talk to yourself like someone you love." – Brené Brown.</p>
        <DailyCheckinCard />
        <div className='container'>
          <h2>Mental health is personal—choose what feels right for you.</h2>
          <p>AI or human help—whatever works for you. Take the first step toward mental peace!</p>
          <div className='section'>
            <div className="ai-chat">
              <button>Your friendly, always-available AI listener—mental wellness redefined.</button>
            </div>
            <div className="human-chat">
              <button>There's nothing like human empathy—because some problems need a personal touch.</button>
            </div>
          </div>
        </div>
        <Articles />
      </main>
    </div>
  );
}



export default HomePage;