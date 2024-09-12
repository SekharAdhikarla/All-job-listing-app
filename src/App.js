// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Jobs from './components/Jobs';
import Bookmarks from './components/Bookmarks';

const App = () => {
  return (
    <Router>
      <div>
        {/* Bottom Navigation */}
        <nav style={styles.nav}>
          <Link to="/jobs" style={styles.navLink}>Jobs</Link>
          <Link to="/bookmarks" style={styles.navLink}>Bookmarks</Link>
        </nav>
        
        {/* Routes */}
        <Routes>
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'lightgreen',
    padding: '10px 0',
    borderTop: '1px solid #ccc',
    
  },
  navLink: {
    textDecoration: 'none',
    padding: '10px 20px',
    fontSize: '18px',
    
    
  }
};

export default App;
