// src/pages/FaqPage.tsx
import React from 'react';
import Faq from '../components/Faq';

const FaqPage: React.FC = () => {
  return (
    <div className='mt-3 '>
      <h2 className="font-bold text-lg mb-4">Frequently Asked Questions</h2>
      
      <Faq 
        question="How much does Blender cost?" 
        answer="Blender is free and open-source software, available for anyone to use." 
      />
      <Faq 
        question="How long does it take to learn?" 
        answer="It typically takes around 6-8 weeks to learn Blender 3D, depending on your dedication and prior experience." 
      />
    </div>
  );
};

export default FaqPage;
