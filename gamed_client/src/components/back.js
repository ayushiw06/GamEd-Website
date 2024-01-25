import React from 'react';

const BackButton = () => {
  const goBack = () => {
    // Add your logic for navigating back here
    // window.history.back();
    window.location.href='/';
  };

  return (
    <button
      style={{
        backgroundColor: '#D4FF59',
        color: 'black',
        position: 'absolute',
        top: 10,
        left: 10,
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={goBack}
    >
      Home
    </button>
  );
};

export default BackButton;
