// components/Bookmarks.js
import React, { useState, useEffect } from 'react';

const Bookmarks = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedJobs')) || [];
    setBookmarkedJobs(storedBookmarks);
  }, []);

  return (
    <div>
      <h2>Bookmarked Jobs</h2>
      {bookmarkedJobs.length === 0 ? (
        <p>No jobs bookmarked.</p>
      ) : (
        bookmarkedJobs.map(job => (
          <div key={job.id} style={styles.jobCard}>
            <h3>{job.title}</h3>
            <p>Location: {job.location}</p>
            <p>Salary: {job.salary}</p>
            <p>Phone: {job.phone}</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  jobCard: {
    padding: '15px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px'
  }
};

export default Bookmarks;
