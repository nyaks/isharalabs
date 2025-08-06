const FAQ = () => {
  const faqItems = [
    {
      question: 'What is a startup studio?',
      answer: 'A startup studio is an organization that creates and launches multiple startups by providing resources, expertise, and a structured process.',
    },
    {
      question: 'How does a startup studio differ from a traditional incubator or accelerator?',
      answer: 'Unlike incubators and accelerators, which support external startups, startup studios generate their own ideas and build companies in-house from the ground up.',
    },
    {
      question: 'What types of startups does Ishara Labs create?',
      answer: 'We are currently sector agnostic (any industry) but focusing on how AI (Artificial Intelligence), chatbots and WhatApp can be used to create impact in different industries.',
    },
    {
      question: 'Can external entrepreneurs or ideas be brought into a startup studio?',
      answer: 'While we are currently focusing on getting internal ideas and validating them, we are working on ways in which we can invite external ideas and use our time tested processes to validate and launch these. Let us chat at hello@isharalabs.com',
    },
    {
      question: 'How can I get involved in your Startups?',
      answer: 'We currently do not have any open roles, but we would love it if you could interact wil our startups and give feedback. This would help in our validation of ideas. Give feedback to the respective startups communictaion channels.',
    },
  ];

  return (
    <section>
      <h2>Frequently Asked Questions</h2>
      {faqItems.map(item => (
        <div key={item.question} className="faq-item">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
