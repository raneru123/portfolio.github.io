import React from 'react';
import styled from 'styled-components';

const PreloaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Preloader = () => {
  return (
    <PreloaderContainer>
      {/* Add your preloader animation here */}
      {/* For example: */}
      <div className="loader"></div>
    </PreloaderContainer>
  );
};

export default Preloader;
