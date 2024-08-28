import React from 'react';

type Props = {};

const Query = (props: Props) => {
  return (
    <div className="flex flex-col h-[90dvh] justify-between w-full max-w-md sm:max-w-full sm:w-full lg:max-w-full mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="overflow-y-auto flex-1 p-4 bg-gray-100 rounded-lg">
        <div className="text-sm text-gray-600">Hello! How can I help you today?</div>
      </div>
      <div className="flex items-center p-2 mt-4 bg-white rounded-lg border-t">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 text-sm border rounded-lg focus:outline-none"
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Send
        </button>
      </div>
    </div>
  );
};

export default Query;
