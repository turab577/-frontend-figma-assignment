import React, { useState } from 'react';
import assets from '../../Assets/assets';

const faqs = [
  {
    question: "Dove si monta S.I.R.E.?",
    answer: "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
  },
  {
    question: "Chi monta l’impianto S.I.R.E.?",
    answer: "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra",
  },
  {
    question: "Quanto tempo impiega l’installazione?",
    answer: "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
  },
  {
    question: "E’ necessario richiedere autorizzazioni al condominio?",
    answer: "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
  },
  {
    question: "L’impianto è garantito?",
    answer: "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
  },
  {
    question: "E’ possibile usufruire di bonus fiscali?",
    answer: "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra ",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1100px] mx-auto py-16 px-4">
      

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-md shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center w-full text-left px-4 py-3 gap-3"
            >
              <img
                src={openIndex === index ? assets.hide : assets.show}
                alt="toggle icon"
                className="w-[20px] h-[20px] transition duration-300"
              />
              <span className="text-[#363636] font-medium text-[16px]">{faq.question}</span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-[#54595F] text-[14px] leading-[24px]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
