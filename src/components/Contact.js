import React from 'react';

function Contact(props) {
  return (
    <div className={`container mx-auto p-4 ${props.mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1>Contact Us</h1>
      <p>This is the Contact page.</p>
    </div>
  );
}

export default Contact;