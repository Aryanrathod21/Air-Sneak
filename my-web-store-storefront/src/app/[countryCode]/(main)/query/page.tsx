"use client";
import React, { useState } from "react";

type Props = {};

const Query = (props: Props) => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [activeRelatedQuestion, setActiveRelatedQuestion] = useState<string | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");

  const questions = [
    {
      question: "What are the best running shoes?",
      answer:
        "The best running shoes vary based on your needs, but popular choices include the Nike Air Zoom Pegasus, Adidas Ultraboost, and ASICS Gel-Kayano.",
      related: [
        {
          question: "What shoes are best for long-distance running?",
          answer: "For long-distance running, shoes with good cushioning and support, like the Hoka One One or Brooks Ghost, are recommended.",
        },
        {
          question: "Which running shoes have the best cushioning?",
          answer: "Running shoes with the best cushioning include the Adidas Ultraboost and the ASICS Gel-Nimbus.",
        },
        {
          question: "How do I choose the right running shoes?",
          answer: "To choose the right running shoes, consider your foot type, running style, and the terrain you'll be running on.",
        },
      ],
    },
    {
      question: "How do I clean my sneakers?",
      answer:
        "To clean sneakers, remove any excess dirt with a dry brush, use a mild cleaning solution, and air dry. Avoid submerging them in water.",
      related: [
        {
          question: "Can I put sneakers in the washing machine?",
          answer: "It's not recommended to put sneakers in the washing machine, as it can damage the material and structure.",
        },
        {
          question: "What is the best way to dry sneakers?",
          answer: "Air drying is the best method for drying sneakers. Avoid direct heat sources like radiators.",
        },
        {
          question: "How often should I clean my sneakers?",
          answer: "Cleaning your sneakers every few weeks, depending on usage, helps maintain their appearance and longevity.",
        },
      ],
    },
    {
      question: "How often should I replace my running shoes?",
      answer:
        "It is recommended to replace running shoes every 300-500 miles, depending on wear and tear.",
      related: [
        {
          question: "How do I know when my running shoes are worn out?",
          answer: "Signs that running shoes are worn out include loss of cushioning, worn-out soles, and uneven wear patterns.",
        },
        {
          question: "What are the signs that I need new running shoes?",
          answer: "If you experience discomfort, pain, or notice the shoe's structure breaking down, it's time for a new pair.",
        },
        {
          question: "Can worn-out shoes cause injuries?",
          answer: "Yes, worn-out shoes can lead to injuries like shin splints or plantar fasciitis due to lack of support and cushioning.",
        },
      ],
    },
  ];

  const handleQuestionClick = (
    question: string,
    answer: string,
    related: { question: string; answer: string }[]
  ) => {
    setSelectedQuestion(question);
    setSelectedAnswer(answer);
    setActiveRelatedQuestion(null); // Reset related question answer visibility
  };

  const handleRelatedQuestionClick = (question: string) => {
    setActiveRelatedQuestion((prev) => (prev === question ? null : question));
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, inputMessage]);
      setInputMessage("");
    }
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
                onClick={() =>
                  handleQuestionClick(q.question, q.answer, q.related)
                }
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
                {questions
                  .find((q) => q.question === selectedQuestion)
                  ?.related.map((related, index) => (
                    <li key={index} className="mt-2">
                      <button
                        className="block text-left w-full py-2 px-4 mb-2 bg-white rounded-lg border hover:bg-gray-200 focus:outline-none cursor-pointer"
                        onClick={() =>
                          handleRelatedQuestionClick(related.question)
                        }
                      >
                        {related.question}
                      </button>
                      {activeRelatedQuestion === related.question && (
                        <p className="mt-1 text-gray-700">{related.answer}</p>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
        {messages.map((msg, index) => (
          <div key={index} className="flex justify-end mt-2">
            <div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">
              {msg}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-2 mt-4 bg-white rounded-lg border-t">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 text-sm border rounded-lg focus:outline-none"
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Query;
