import AccordionItem from './AccordionItem';

const questions = [
  {
    question: 'What is a Web Scanner?',
    answer:
      'A web scanner is a process of analyzing a website to search for security vulnerabilities or malware (such as viruses) in order to identify potential security threats.',
  },
  {
    question: 'What is a computer virus?',
    answer:
      "A virus is a malicious program that infects computer systems and files with the intention of causing harm, stealing data, or gaining control of the device without the user's permission.",
  },
  {
    question: 'What are the ways to protect against viruses?',
    answer:
      'Use antivirus software, avoid downloading files or programs from untrusted sources, and regularly update systems to protect against vulnerabilities.',
  },
  {
    question: 'What is a cyberattack?',
    answer:
      'A cyberattack is an unlawful attempt to exploit electronic systems, networks, or applications to steal data or cause damage.',
  },
  {
    question: 'What are the risks of opening a malicious website?',
    answer:
      'Opening a malicious website can lead to the download of harmful software on your device without your knowledge, potentially causing data loss, theft, or even allowing attackers to control your device.',
  },
  {
    question: 'Can malicious websites steal my data?',
    answer:
      'Yes, malicious websites can exploit security vulnerabilities or trick you into entering sensitive information such as passwords or credit card details.',
  },
  {
    question: 'How can I tell if a website is safe to visit?',
    answer:
      "Look for a small padlock icon next to the website address (HTTPS) and avoid websites that display security warnings from your browser. It's best to visit well-known, trusted websites.",
  },
  {
    question: 'Is it necessary to use antivirus software?',
    answer:
      'Yes, using antivirus software helps protect your device from viruses and malware. It’s important to update it regularly to ensure maximum protection.',
  },
];

function Accordion() {
  return (
    <div className="mb-8 grid gap-5 rounded-lg bg-white p-6 shadow-md lg:grid-cols-2">
      <div className="flex flex-col gap-5">
        {questions.slice(0, questions.length / 2).map((question, index) => (
          <AccordionItem question={question} key={index} />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        {questions.slice(questions.length / 2).map((question, index) => (
          <AccordionItem question={question} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;
