import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import AccountSettings from './AccountSettings'
import Banner from './Banner'
import Home from './Home'
import AboutUs from './AboutUs'
import Analytics from './Analytics'
import GetStarted from './GetStarted'
import Week from './Week';

function App() {
  return (
    <Router basename='/PlanIt/'>
      <div>
        <Routes>
          <Route path="/planner" element={<Home />} />
          <Route path="/" element={<AboutUs />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/strike" element={<Week />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;