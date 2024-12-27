import React from 'react';

const TreeControls = ({ onInsert, onDelete, onClear, onFill }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInsert = () => {
    if (inputValue.trim() !== '') {
      onInsert(parseInt(inputValue));
      setInputValue('');
    }
  };

  const handleDelete = () => {
    if (inputValue.trim() !== '') {
      onDelete(parseInt(inputValue));
      setInputValue('');
    }
  };


  return (
    <div className="flex gap-4 items-center justify-center mb-4 p-4 bg-gray-800 rounded-lg">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter number"
      />
      <button
        onClick={handleInsert}
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
      >
        Insert
      </button>
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
      >
        Delete
      </button>
      <button
        onClick={onClear}
        className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
      >
        Clear Tree
      </button>
      <button
        onClick={onFill}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Fill Tree
      </button>
    </div>
  );
};

export default TreeControls; 