"use client";
import React, { useState } from "react";
const accordionData = [
  {
    question: "What services does your consulting firm offer?",
    answer:
      "Our consulting firm specializes in brief description of your main services or areas of expertise. From strategic planning to we provide tailored solutions to meet the unique needs of our clients.",
  },
  {
    question: "How can I request a consultation?",
    answer:
      "Our consulting firm specializes in brief description of your main services or areas of expertise. From strategic planning to we provide tailored solutions to meet the unique needs of our clients.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Our consulting firm specializes in brief description of your main services or areas of expertise. From strategic planning to we provide tailored solutions to meet the unique needs of our clients.",
  },
  {
    question: "How is your consulting approach unique?",
    answer:
      "Our consulting firm specializes in brief description of your main services or areas of expertise. From strategic planning to we provide tailored solutions to meet the unique needs of our clients.",
  },
  {
    question: "How do you ensure confidentiality?",
    answer:
      "Our consulting firm specializes in brief description of your main services or areas of expertise. From strategic planning to we provide tailored solutions to meet the unique needs of our clients.",
  },
];

function Accordient() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="accordion faq" id="faqExa">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeAccordion === index ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </button>
          </h2>
          <div
            id={`faq${index}`}
            className={`accordion-collapse collapse ${
              activeAccordion === index ? "show" : ""
            }`}
            data-bs-parent="#faqExa"
          >
            <div className="accordion-body">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordient;
