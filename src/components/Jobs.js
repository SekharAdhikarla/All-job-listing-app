/* eslint-disable react-hooks/exhaustive-deps */
// components/Jobs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, [page]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      setJobs(prevJobs => [...prevJobs, ...response.data.results]);
      setLoading(false);
    } catch (error) {
      setError('Error fetching jobs');
      setLoading(false);
    }
  };

  const handleScroll = (e) => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      setPage(page + 1);  // Load more jobs
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  return (
    <div>
      <h2>Jobs</h2>
      {jobs.map(job => (
        <div key={job.id} style={styles.jobCard}>
          <h3>{job.title}</h3>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
          <p>Phone: {job.phone}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

const styles = {
  jobCard: {
    padding: '15px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    
  }
};

export default Jobs;
