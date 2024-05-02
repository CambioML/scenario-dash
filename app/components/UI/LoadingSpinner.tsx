import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-[30px] w-[30px] border-t-2 border-neutral-400"></div>
    </div>
  );
};

export default LoadingSpinner;
