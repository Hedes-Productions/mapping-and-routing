import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const navigate = useNavigate();
  return (
    <div>
      <div>About Us</div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Go to Home Page
      </button>
      <button
        onClick={() => {
          navigate('/usersPage');
        }}
      >
        Go to Users Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default AboutUs;
