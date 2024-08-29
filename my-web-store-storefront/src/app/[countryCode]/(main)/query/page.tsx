"use client"
import React, { useState } from 'react';

type Props = {};

const Query = (props: Props) => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const questions = [
    {
      question: 'What are the best running shoes?',
      answer: 'The best running shoes vary based on your needs, but popular choices include the Nike Air Zoom Pegasus, Adidas Ultraboost, and ASICS Gel-Kayano.',
    },
    {
      question: 'How do I clean my sneakers?',
      answer: 'To clean sneakers, remove any excess dirt with a dry brush, use a mild cleaning solution, and air dry. Avoid submerging them in water.',
    },
    {
      question: 'How often should I replace my running shoes?',
      answer: 'It is recommended to replace running shoes every 300-500 miles, depending on wear and tear.',
    },
  ];

  return (
    <div className="flex flex-col h-[90dvh] justify-between w-full max-w-md sm:max-w-full sm:w-full lg:max-w-full mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="overflow-y-auto flex-1 p-4 bg-gray-100 rounded-lg">
        <div className="text-sm text-gray-600 mb-4">
          Hello! How can I help you today?
        </div>
        <div className="text-sm text-gray-600">
          {questions.map((q, index) => (
            <button
              key={index}
              className="block text-left w-full py-2 px-4 mb-2 bg-white rounded-lg border hover:bg-gray-200 focus:outline-none"
              onClick={() => setSelectedQuestion(q.answer)}
            >
              {q.question}
            </button>
          ))}
        </div>
        {selectedQuestion && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">Answer:</h3>
            <p className="text-gray-700">{selectedQuestion}</p>
          </div>
        )}
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
