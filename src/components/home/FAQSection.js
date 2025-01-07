import { useState } from 'react';

function FAQSection() {
  const [openItem, setOpenItem] = useState(null);
  
  const faqs = [
    {
      question: 'How do you ensure your properties are up-to-date daily?',
      answer: 'We maintain direct relationships with property owners...'
    },
    // More FAQs...
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 cursor-pointer"
              onClick={() => setOpenItem(openItem === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{faq.question}</h3>
                <span>{openItem === index ? '−' : '+'}</span>
              </div>
              {openItem === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;