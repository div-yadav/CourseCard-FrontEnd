// src/components/Faq.tsx
import React from 'react';

interface FaqProps {
  question: string;
  answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
  return (
    <div className="mt-4 bg-white p-3 rounded-2xl ">
      <h3 className="font-medium ">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default Faq;
