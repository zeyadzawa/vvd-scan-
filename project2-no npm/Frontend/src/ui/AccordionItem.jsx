import { useState } from 'react';

function AccordionItem({ question }) {
  const [isActive, setIsAcvtive] = useState(false);
  return (
    <div className="h-fit rounded-b bg-gray-100 text-stone-800">
      <div
        className="bg- text flex cursor-pointer items-center justify-between rounded-t px-4 py-4 shadow-sm shadow-gray-300 font-semibold"
        onClick={() => setIsAcvtive((isActive) => !isActive)}
      >
        <span>{question.question}</span>
        <span>{isActive ? '-' : '+'}</span>
      </div>
      {isActive && <p className="px-5 py-2">{question.answer}</p>}
    </div>
  );
}

export default AccordionItem;
