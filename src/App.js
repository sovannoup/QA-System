import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import HomePage from './screens/HomePage';
import AskQuestionPage from './screens/AskQuestionPage';
import UserProfilePage from './screens/UserProfile';
import ViewQuestionPage from './screens/ViewQuestionPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/ask-question" element={<AskQuestionPage />} />
          <Route exact path="/profile" element={<UserProfilePage />} />
          <Route exact path="/view-question" element={<ViewQuestionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
