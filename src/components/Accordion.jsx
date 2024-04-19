import React, { useState } from 'react';

function AccordionItem({ title, content, isActive, onClick }) {
  return (
    <div
      className={`responsive-menu-list ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="title">{title}</div>
      {isActive && <div className="content">{content}</div>}
    </div>
  );
}

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {[/* Add your array of items here */].map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
