// components/JobDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const JobDetails = () => {
  const { state: job } = useLocation();

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <p>Phone: {job.phone}</p>
      <p>Description: {job.description}</p>
    </div>
  );
};

export default JobDetails;
