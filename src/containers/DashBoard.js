import React from 'react';

const DashBoard = ({ activeValue }) => {
  console.log('DashBoard', activeValue )
  if (!activeValue) {
    return (
      <div>
        <h3>
          not selected...
        </h3>
      </div>
    )
  }
  return (
    <div>
      <h3>
        selected : {activeValue}
      </h3>
    </div>
  );
};

export default DashBoard;
