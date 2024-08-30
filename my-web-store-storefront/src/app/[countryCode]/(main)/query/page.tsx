"use client";
import React, { useState } from "react";

type Props = {};

const Query = (props: Props) => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [relatedQuestions, setRelatedQuestions] = useState<string[]>([]);

  const questions = [
    {
      question: "What are the best running shoes?",
      answer:
        "The best running shoes vary based on your needs, but popular choices include the Nike Air Zoom Pegasus, Adidas Ultraboost, and ASICS Gel-Kayano.",
      related: [
        "What shoes are best for long-distance running?",
        "Which running shoes have the best cushioning?",
        "How do I choose the right running shoes?",
      ],
    },
    {
      question: "How do I clean my sneakers?",
      answer:
        "To clean sneakers, remove any excess dirt with a dry brush, use a mild cleaning solution, and air dry. Avoid submerging them in water.",
      related: [
        "Can I put sneakers in the washing machine?",
        "What is the best way to dry sneakers?",
        "How often should I clean my sneakers?",
      ],
    },
    {
      question: "How often should I replace my running shoes?",
      answer:
        "It is recommended to replace running shoes every 300-500 miles, depending on wear and tear.",
      related: [
        "How do I know when my running shoes are worn out?",
        "What are the signs that I need new running shoes?",
        "Can worn-out shoes cause injuries?",
      ],
    },
  ];

  const handleQuestionClick = (question: string, answer: string, related: string[]) => {
    setSelectedQuestion(question);
    setSelectedAnswer(answer);
    setRelatedQuestions(related);
  };

  return (
    <div className="flex flex-col h-[90dvh] justify-between w-full max-w-md sm:max-w-full sm:w-full lg:max-w-full mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="overflow-y-auto flex-1 p-4 bg-gray-100 rounded-lg">
        {!selectedQuestion && (
          <div className="text-sm text-gray-600 mb-4">
            Hello! How can I help you today?
          </div>
        )}
        <div className="text-sm text-gray-600">
          {!selectedQuestion &&
            questions.map((q, index) => (
              <button
                key={index}
                className="block text-left w-full py-2 px-4 mb-2 bg-white rounded-lg border hover:bg-gray-200 focus:outline-none"
                onClick={() => handleQuestionClick(q.question, q.answer, q.related)}
              >
                {q.question}
              </button>
            ))}
        </div>
        {selectedQuestion && (
          <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">{selectedQuestion}</h3>
            <p className="text-gray-700">{selectedAnswer}</p>
            <div className="mt-4">
              <h4 className="text-md font-semibold">Related Questions:</h4>
              <ul className="mt-2">
                {relatedQuestions.map((related, index) => (
                  <li
                    key={index}
                    className="mt-1 text-blue-600 cursor-pointer hover:underline"
                    onClick={() => {
                      const relatedQuestion = questions.find((q) => q.question === related);
                      if (relatedQuestion) {
                        handleQuestionClick(
                          relatedQuestion.question,
                          relatedQuestion.answer,
                          relatedQuestion.related
                        );
                      }
                    }}
                  >
                    {related}
                  </li>
                ))}
              </ul>
            </div>
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
