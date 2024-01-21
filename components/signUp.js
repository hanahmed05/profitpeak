import React from 'react';

const SignUp = () => {
  const buttonStyle = {
    padding: '10px',
    position: 'fixed',
    top: '40px', /* Adjust the top position as needed */
    right: '20px', /* Adjust the right position as needed */
    color: 'black', // Changed text color to black for visibility
    border: 'none',
    backgroundColor: 'white', // Set background color to white
  };
  
  
  const buttonHoverStyle = {
    backgroundColor:'black', /* Your desired hover background color */
  };

  return (
    <div>
      <div className="signup-login-button btn btn-success" style={buttonStyle}>
        <button style={{ padding: '10px', color: 'teal', border: '10px', fontSize: '20px' }} hoverStyle={buttonHoverStyle}>
          Sign Up / Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
