import React from 'react';
import UsersList from './components/UsersList'; // Import your UsersList component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AskQuestion from "./pages/AskQuestion";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Testing</h1>
        <Routes>
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="/" element={
            <div>
              <h2>Welcome!</h2>
              <a href="/ask">Ask a Question</a>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;