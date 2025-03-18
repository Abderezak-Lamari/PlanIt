import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import AccountSettings from './AccountSettings'
import Banner from './Banner'
import Home from './Home'
import AboutUs from './AboutUs'
import Analytics from './Analytics'
import GetStarted from './GetStarted'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;