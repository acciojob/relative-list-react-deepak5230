import React from 'react';

const DiwaliRelatives = () => {
  // List of relatives
  const relatives = [
    'Aunt Rita',
    'Uncle Raj',
    'Cousin Priya',
    'Grandma Sita',
    'Grandpa Krishna'
  ];

  return (
    <div>
      <h1>Diwali Visits</h1>
      <ol id="relativelist">
        {relatives.map((relative, index) => (
          <li id={`relativeListItem${index + 1}`} key={`relativeListItem${index + 1}`}>
            {relative}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DiwaliRelatives;
