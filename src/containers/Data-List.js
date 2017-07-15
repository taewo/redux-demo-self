import React from 'react';

const DataList = ({ data, selectedValue }) => {
  console.log('DataList', data)
  const renderList = () => {
    return data.map((data) => {
      return (
        <li
          onClick={() => selectedValue(data.title)}
          key={data.title}
        >
          {data.title}
        </li>
      );
    });
  };
  return (
    <div>
      <ul>
        {renderList()}
      </ul>
    </div>
  );
};

export default DataList;
