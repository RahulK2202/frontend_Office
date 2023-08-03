import React from 'react';
import '../Utils/Spinner.css'



const LoadingSpinner = () => {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    );
  };
  
  export default LoadingSpinner;
  