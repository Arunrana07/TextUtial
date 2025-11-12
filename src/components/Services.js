import React from 'react';

function Services(props) {
  return (
    <div className={`container mx-auto p-4 ${props.mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1>Our Services</h1>
      <p>This is the Services page.</p>
    </div>
  );
}

export default Services;